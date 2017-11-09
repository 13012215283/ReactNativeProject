//
//  WebTool.swift
//  CZ_Project
//
//  Created by zol on 2017/11/8.
//  Copyright © 2017年 zol. All rights reserved.
//

import UIKit
import Alamofire
class WebTool: NSObject {
    
    /// 网络请求中间键接口
    let safeRequestUtl = CZ_isOnline ? "http://mq.echoesnet.com:8080/queue" : "http://106.75.87.149:8080/queue"
    
    let appkeyMain = "1002HGJJD5HVJ6Y3"
}
