package com.echoesnet.crowdfunding;

import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.provider.Settings;
import android.support.v7.app.AppCompatActivity;
import android.text.TextUtils;
import android.util.Log;
import android.view.KeyEvent;

import com.echoesnet.crowdfunding.kevin.utils.PermissionCheck;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.facebook.react.shell.MainReactPackage;

import java.io.File;

public class MainActivity extends AppCompatActivity implements DefaultHardwareBackBtnHandler {
    private ReactRootView mReactRootView;
    private ReactInstanceManager mReactInstanceManager;

    private static int OVERLAY_PERMISSION_REQ_CODE = 999;

    private int mPermission = PermissionCheck.has_PERMISSION_NULL;
    private String bundleFilePath = "";
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        mReactRootView = new ReactRootView(this);
        setContentView(mReactRootView);

        String mSdRootPath = Environment.getExternalStorageDirectory().getPath();
        Log.i("dev-liu|",mSdRootPath);
        bundleFilePath = mSdRootPath + File.separator + "crowd/index.android.bundle";
        File f=new File(bundleFilePath);
        if(!f.exists()){
            Log.i("dev-liu|",bundleFilePath + " can't find file");
            doVocationalWork("");
        }else {
            mPermission = PermissionCheck.getStorage(this,mPermission);
            if(mPermission == (PermissionCheck.has_PERMISSION_STORAGE)){
                doVocationalWork(bundleFilePath);
            }
        }





        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            if (!Settings.canDrawOverlays(this)) {
                Intent intent = new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION,
                        Uri.parse("package:" + getPackageName()));
                startActivityForResult(intent, OVERLAY_PERMISSION_REQ_CODE);
            }
        }
    }


    private void doVocationalWork(String localBundle){
        if(TextUtils.isEmpty(localBundle)){
            mReactInstanceManager = ReactInstanceManager.builder()
                    .setApplication(getApplication())
                    .setBundleAssetName("index.android.bundle")
                    .setJSMainModulePath("index")
                    .addPackage(new MainReactPackage())
                    .setUseDeveloperSupport(BuildConfig.DEBUG)
                    .setInitialLifecycleState(LifecycleState.RESUMED)
                    .build();
        }else{
            mReactInstanceManager = ReactInstanceManager.builder()
                    .setApplication(getApplication())
                    .setJSBundleFile(localBundle)
                    .setJSMainModulePath("index")
                    .addPackage(new MainReactPackage())
                    .setUseDeveloperSupport(BuildConfig.DEBUG)
                    .setInitialLifecycleState(LifecycleState.RESUMED)
                    .build();
        }
        mReactRootView.startReactApplication(mReactInstanceManager, "MyReactNativeApp", null);
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        if (0 == grantResults.length) {
            return;
        } else {
            if (grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                mPermission = mPermission | requestCode;
                if (mPermission == (PermissionCheck.has_PERMISSION_STORAGE)) {
                    doVocationalWork(bundleFilePath);
                }
            } else {

            }
        }
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode == OVERLAY_PERMISSION_REQ_CODE) {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                if (!Settings.canDrawOverlays(this)) {
                    // SYSTEM_ALERT_WINDOW permission not granted...
                }
            }
        }
    }

    @Override
    public void invokeDefaultOnBackPressed() {
        super.onBackPressed();
    }

    //传递一些Activity的生命周期事件到ReactInstanceManager，这是的JavaScript代码可以控制当前用户按下返回按钮的时候作何处理（譬如控制导航切换等等）。如果JavaScript端不处理相应的事件，你的invokeDefaultOnBackPressed方法会被调用。默认情况，这会直接结束你的Activity。
    @Override
    protected void onPause() {
        super.onPause();

        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostPause(this);
        }
    }

    @Override
    protected void onResume() {
        super.onResume();

        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostResume(this, this);
        }
    }

    @Override
    public void onBackPressed() {
        if (mReactInstanceManager != null) {
            mReactInstanceManager.onBackPressed();
        } else {
            super.onBackPressed();
        }
    }

    //我们需要改动一下开发者菜单。默认情况下，任何开发者菜单都可以通过摇晃或者设备类触发，不过这对模拟器不是很有用。所以我们让它在按下Menu键的时候可以显示
    @Override
    public boolean onKeyUp(int keyCode, KeyEvent event) {
        if (keyCode == KeyEvent.KEYCODE_MENU && mReactInstanceManager != null) {
            mReactInstanceManager.showDevOptionsDialog();
            return true;
        }
        return super.onKeyUp(keyCode, event);
    }
}
