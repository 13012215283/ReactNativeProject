//
//  ReactViewController.swift
//  CZ_Project
//
//  Created by zol on 2017/11/6.
//  Copyright © 2017年 zol. All rights reserved.
//

import UIKit
import React
import SnapKit

class ReactViewController: UIViewController {
    
    // MARK: - 私有属性
    
    /// react视图
    fileprivate var reactView : RCTRootView
    
    
    // MARK: - 构造方法
    init(bundleURL : URL?, moduleName : String, properties : [AnyHashable : Any]?,launchOptions : [AnyHashable : Any]?) {
        reactView = RCTRootView(bundleURL: bundleURL, moduleName: moduleName, initialProperties: properties, launchOptions: launchOptions)

        super.init(nibName: nil, bundle: nil)
        
    }
    
    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    // MARK: - 生命周期
    override func viewDidLoad() {
        
        super.viewDidLoad()
        title = "reactView"
        navigationController?.navigationBar.isTranslucent = false
        navigationController?.navigationBar.isHidden = true
        setupUI()
        
    }
    
    // MARK: - 设置UI
    fileprivate func setupUI() {
        
        view.backgroundColor = UIColor.white
        view.addSubview(reactView)
        layout()
        
    }
    
    
    // MARK: - 布局
    fileprivate func layout() {
        
        reactView.snp.makeConstraints { (make) in
            make.edges.equalTo(view)
        }
        
    }
    
    
    
    
    
    
}
