$(function () {
  function Gogo (email, pwd) {    ////套用请忽略
    this.email = email
    this.pwd = pwd
  }

  ////套用请忽略
  Gogo.prototype = {   ////////套用请忽略

    //是否登录
    isLogin: function () {
      var getEmail = window.localStorage.getItem('email')
      var getPwd = window.localStorage.getItem('pwd')
      return getEmail === '000@163.com' && getPwd === '000000'
    },
    //公用头部
    totalHeader: function () {
      var totalHeader = `  <!--顶部-->
   <!--顶部-->
  <div class="nav-info">
    <ul class="nav-items">
      <li>
        <a href="javascript:void(0)">
          <span class="iconfont icon-qushuchakanshuxing2"></span>
          <span class="gerber">Online Gerber Viewer</span>
        </a>
      </li>
      <li>
        <a href="phone-display.html">
          <span class="iconfont icon-shouji1"></span>
          <span class="gerber">Mobile Website</span>
        </a>
      </li>
      <li>
        <a href="javascript:void(0)">
          <span class="iconfont icon-Skype"></span>
        </a>
        <div class="skype-box">
          <div class="skype-link active">
            <a href="skype:live:service_7440?chat">
              Skype PC
            </a>
          </div>
          <div class="skype-link">
            <a href="https://web.skype.com/" target="_blank">
              Skype WEB
            </a>
          </div>
        </div>
      </li>
      <li><a href="mailto:service@pcbgogo.com">
        <span class="iconfont icon-iconfontcolor06"></span>
        <span class="mail-text">service@pcbgogo.com</span>
      </a>
      </li>
      <li class="language">
                    <img class="country-tag" src="/img/images/England.png" alt="" width="16" height="16">&nbsp;English
                
                <!--语言选择弹出层-->

                <ul class="language-box">
                    <li onclick="window.open('index.html','_self')"><img class="country-tag" src="/img/images/England.png" alt="national flag" width="16" height="16">&nbsp;English</li>
                    <li onclick="window.open('https://www.pcbgogo.jp', '_self')"><img class="country-tag" src="/img/images/Japan.png" alt="national flag" width="16" height="16">&nbsp;日本語</li>
                </ul>
            </li>
    </ul>
  </div>
  <div class="top-box">
    <!--左侧logo-->
    <h1 class="logo">
      <a href="index.html">
        PCBgogo
      </a>
    </h1>
    <!--nav-tips-->
    <img src="img/images/logo-tips.jpg" alt="logo tips" width="340" height="34" class="nav-tips">
    <!--日文-->
    <!--<img src="img/images/logo-tips_jp.jpg" alt="logo tips" width="336" height="34" class="nav-tips-jp">-->
    <!--nav-tips-->
    <!--右侧登录-->
    <div class="sign-box">
      <div class="sign-lists">
        <div class="sign-in"><a href="javascript:void(0)">Sign in</a></div>
        <div class="join"><a href="register-login.html">Join Free</a></div>
        <div class="joined">
          <i><img src="img/images/user.png" alt=""></i>
        </div>
        <div class="hi-in">
          <a href="javascript:void(0)">Hi! zhang测大街上公开了坚朗</a>
        </div>
        <!--信息列表-->
        <div class="person-info">
          <!--  未登录-->
          <div class="info">
            <div class="left-info">
              <div class="tips">
                New Customer?
              </div>
              <a class="join-free" href="register-login.html">
                Join Free
              </a>
            </div>
            <div class="right-info">
              <a class="login-in" href="javascript:void(0)">
                Sign in
              </a>
            </div>
          </div>
          <!--   已登录 -->
          <div class="info" style="display: none">
            <div class="left-info">
              <div class="tips">
                Email: <span>20**@163.com</span>
              </div>
              <a class="out-btn" href="javascript:void(0)">
                Sign Out
              </a>
            </div>
          </div>

          <div class="link-lists">
            <!-- 有数量添加   active 类名-->
            <div class="item">
              <a href="javascript:void(0)">
                <span> •  </span>
                <span class="name">My Account</span>
              </a>
            </div>
            <div class="item">
              <a href="javascript:void(0)">
                <span> •  </span>
                <span class="name">My Orders list</span>
              </a>
            </div>
            <div class="item active">
              <a href="javascript:void(0)">
                <span> •  </span>
                <span class="name">Account Balance</span>
              </a>
            </div>
            <div class="item">
              <a href="javascript:void(0)">
                <span> •  </span>
                <span class="name">Discount coupon</span>
              </a>
            </div>
            <div class="item">
              <a href="javascript:void(0)">
                <span> •  </span>
                <span class="name">Reward points</span>
              </a>
            </div>
            <div class="item">
              <a href="javascript:void(0)">
                <span> •  </span>
                <span class="name">My Delivery Address</span>
              </a>
            </div>
            <div class="item">
              <a href="javascript:void(0)">
                <span> •  </span>
                <span class="name">My Forum</span>
              </a>
            </div>
            <div class="item">
              <a href="javascript:void(0)">
                <span> •  </span>
                <span class="name">Message</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!--  购物车-->
      <div class="shopping-car">
        <!-- 有数量添加 active 或者你元素控制显示与隐藏-->
        <a href="javascript:void(0)" class="active">
          <span class="iconfont icon-gouwuche1"></span>
          <div class="of-cars">28</div>
        </a>
      </div>
      <!-- 广告-->
      <div class="ads-tips" style="display: none">
        New here ? Getting <span>$50</span> coupon
      </div>
    </div>
  </div>
  <!--导航-->
  <div class="nav">
    <div class="nav-box ">
            <!--左侧列表-->
            <ul class="nav-lists js-nav-lists">
                <li class="active"><a href="/" class="home">Home</a></li>
                <li tab="1">
                    <a href="/pcb-fabrication-quote.html">PCB Instant Quote</a>
                    <div class="child-parent">
                        <div class="child-menu">
                            <div class="item">
                                <a class="title" href="/pcb-fabrication-quote.html">
                                    <span> PCB Manufacturing Calculator </span>
                                </a>
                            </div>
                            <div class="item">
                                <a class="title" href="/pcba-quote.html">
                                    <span> PCB Assembly Calculator </span>
                                </a>
                            </div>
                            <div class="item">
                                <a class="title" href="/flexible-pcb-quote.aspx">
                                    <span> Flexible PCB/Rigid-Flex PCB Calculator</span>
                                </a>
                            </div>
                            <div class="item">
                                <a class="title" href="/pcb-stencil-quote.aspx">
                                    <span> SMD Stencil Calculator </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="assembly-menus">
                    <a href="/pcb-assembly.html">PCB Assembly </a>
                    <div class="child-parent">
                        <div class="child-menu">

                            <div class="item">
                                <a class="title" href="https://www.pcbgogo.com/Capabilities/PCBA_Capabilities.html">
                                    <span>PCBA Capabilities</span>
                                </a>
                            </div>
                            <div class="item">
                                <a class="title"
                                   href="https://www.pcbgogo.com/Capabilities/Files_Requested_for_PCBA.html">
                                    <span>Files Requested for PCBA</span>
                                </a>
                            </div>
                            <div class="item">
                                <a class="title"
                                   href="https://www.pcbgogo.com/Capabilities/PCBA_Special_reminders.html">
                                    <span>PCBA Special Reminders</span>
                                </a>
                            </div>
                            <div class="item">
                                <a class="title"
                                   href="https://www.pcbgogo.com/Capabilities/SMT_stencil_and_Laser_Stencil.html">
                                    <span>SMD Stencil</span>
                                </a>
                            </div>
                            <div class="item">
                                <a class="title"
                                   href="https://www.pcbgogo.com/knowledge-center/BGA_Assembly_Capabilities.html">
                                    <span>BGA Assembly Capabilities</span>
                                </a>
                            </div>
                            <div class="item">
                                <a class="title"
                                   href="https://www.pcbgogo.com/knowledge-center/Panel_Requirements_for_PCB_Assembly.html">
                                    <span>Panel Requirements for PCBA </span>
                                </a>
                            </div>
                            <div class="item">
                                <a class="title"
                                   href="https://www.pcbgogo.com/knowledge-center/Components_sourcing.html">
                                    <span>Components sourcing</span>
                                </a>
                            </div>
                            <div class="item">
                                <a class="title"
                                   href="https://www.pcbgogo.com/Capabilities/Fast_Turnkey_PCB_Assembly.html">
                                    <span>Fast Turnkey PCBA</span>
                                </a>
                            </div>
                            <div class="item">
                                <a class="title" href="https://www.pcbgogo.com/Capabilities/PCB_Assembly_process.html">
                                    <span>PCBA Process</span>
                                </a>
                            </div>

                            <!-- 日文部分 套用注意-->
                            <div class="item">
                                <a class="title"
                                   href="https://www.pcbgogo.jp/Capabilities/PCB_Assembly_Capabilities.html">
                                    <span>部品実装基準</span>
                                </a>
                            </div>
                            <div class="item">
                                <a class="title"
                                   href="https://www.pcbgogo.jp/pcb-assembly/Files_Requested_for_PCBA.html">
                                    <span>入稿データ一覧</span>
                                </a>
                            </div>
                            <div class="item">
                                <a class="title" href="https://www.pcbgogo.jp/knowledge-center/smt_pcb.html">
                                    <span>表面実装の能力</span>
                                </a>
                            </div>
                            <div class="item">
                                <a class="title"
                                   href="https://www.pcbgogo.jp/knowledge-center/BGA_assembly_capabilities.html">
                                    <span>BGAの実装能力</span>
                                </a>
                            </div>
                            <div class="item">
                                <a class="title"
                                   href="https://www.pcbgogo.jp/knowledge-center/components_sourcing.html">
                                    <span>部品調達</span>
                                </a>
                            </div>
                            <div class="item">
                                <a class="title" href="https://www.pcbgogo.jp/knowledge-center/mixde_assembly.html">
                                    <span>混合実装</span>
                                </a>
                            </div>
                            <div class="item">
                                <a class="title"
                                   href="https://www.pcbgogo.jp/knowledge-center/through_hole_assembly.html">
                                    <span>スルーホール実装</span>
                                </a>
                            </div>
                            <!-- 日文部分 套用注意-->


                        </div>
                    </div>


                </li>
                <li>
                    <a href="/hdi-pcb.html">Advanced PCB</a>
                    <div class="child-parent">
                        <div class="child-menu">
                            <div class="item">
                                <a class="title" href="flexible-pcb.html">
                                    <span>Flex / Rigid-Flex PCB</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </li>

                <li tab="2" class="capabilities-menus">
                    <a href="/Capabilities/FR_4_PCB_Manufacturing.html"> Capabilities </a>

                    <div class="child-parent">
                        <div class="child-menu">

                            <div class="item">

                                <a class="title" href="/Capabilities/FR_4_PCB_Manufacturing.html">
                                    <span>Printed Circuit Boards</span>
                                </a>

                                <div class="son-box">
                                    <div class="child-link">

                                        <div class="list">
                                            <a href="/Capabilities/FR_4_PCB_Manufacturing.html">
                                                <span class="name">Standard PCB Capabilities</span>
                                            </a>
                                        </div>
                                        <div class="list">
                                            <a href="/Capabilities/Advanced_High_quality_PCB_Manufacturing_Capabilities.html">
                                                <span class="name">Advanced PCB Manufacturing</span>
                                            </a>
                                        </div>
                                        <div class="list">
                                            <a href="/Capabilities/Printed_Circuit_Board_Prototype.html">
                                                <span class="name">Printed Circuit Board Prototype</span>
                                            </a>
                                        </div>
                                        <div class="list">
                                            <a href="/Capabilities/PCB_Capabilities_PCB_Layout.html">
                                                <span class="name">PCB Capabilities &amp; PCB Layout</span>
                                            </a>
                                        </div>
                                        <div class="list">
                                            <a href="javascript:void(0)">
                                                <span class="name">Aluminum PCB</span>
                                            </a>
                                        </div>
                                        <div class="list">
                                            <a href="javascript:void(0)">
                                                <span class="name">Rigid-Flex PCBs</span>
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="item">

                                <a class="title" href="/Capabilities/PCBA_Capabilties.html">
                                    <span>PCB Assembly</span>
                                </a>

                                <div class="son-box">
                                    <div class="child-link">

                                        <div class="list">
                                            <a href="/Capabilities/PCBA_Capabilties.html">
                                                <span class="name">PCBA Capabilities</span>
                                            </a>
                                        </div>
                                        <div class="list">
                                            <a href="/Capabilities/PCB_Assembly_process.html">
                                                <span class="name">PCB Assembly process</span>
                                            </a>
                                        </div>
                                        <div class="list">
                                            <a href="/Capabilities/PCBA_Special_reminders.html">
                                                <span class="name"> PCBA Special reminders</span>
                                            </a>
                                        </div>
                                        <div class="list">
                                            <a href="/Capabilities/Fast_Turnkey_PCB_Assembly.html">
                                                <span class="name">Fast Turnkey PCB Assembly</span>
                                            </a>
                                        </div>
                                        <div class="list">
                                            <a href="/Capabilities/Files_Requested_for_PCBA.html">
                                                <span class="name">Files Requested for PCBA</span>
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="item">

                                <a class="title" href="/Capabilities/qwr.html">
                                    <span>SMD Stencil</span>
                                </a>

                                <div class="son-box">
                                    <div class="child-link">

                                        <div class="list">
                                            <a href="/Capabilities/SMT_stencil_and_Laser_Stencil.html">
                                                <span class="name">SMT stencil and Laser Stencil</span>
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="item">

                                <a class="title" href="/Capabilities/PCB_Design_and_Layout.html">
                                    <span>PCB Design-Aid &amp; Layout</span>
                                </a>

                                <div class="son-box">
                                    <div class="child-link">

                                        <div class="list">
                                            <a href="/Capabilities/PCB_Design_and_Layout.html">
                                                <span class="name">PCB Design and Layout</span>
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </li>


                <li class="capabilities-menus">
                    <a href="/knowledge-center/Printed_Circuit_Board_Prototype.html">Knowledge Center</a>
                    <div class="child-parent">
                        <div class="child-menu">
                            <div class="item">

                                <a class="title" href="/knowledge-center/communicate_and_work.html">
                                    <span>使用指南</span>
                                </a>


                                <div class="son-box">
                                    <div class="child-link">
                                        <div class="list">
                                            <a href="/knowledge-center/communicate_and_work.html">
                                                <span class="name">下单</span>
                                            </a>
                                        </div>
                                        <div class="list">
                                            <a href="/knowledge-center/On_half_of_the_Payment_instructions.html">
                                                <span class="name">下单</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">

                                <a class="title" href="javascript:void(0)">
                                    <span>bbbb</span>
                                </a>


                                <div class="son-box">
                                    <div class="child-link">
                                        <div class="list">
                                            <a href="javascript:void(0)">
                                                <span class="name">bbbb1</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">

                                <a class="title" href="javascript:void(0)">
                                    <span>cccc</span>
                                </a>


                                <div class="son-box">
                                    <div class="child-link">
                                        <div class="list">
                                            <a href="javascript:void(0)">
                                                <span class="name">cccc1</span>
                                            </a>
                                        </div>
                                        <div class="list">
                                            <a href="javascript:void(0)">
                                                <span class="name">cccc2</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </li>


                <li>
                    <a href="/Feedback/">Feedback</a>
                    <div class="child-parent">
                        <div class="child-menu">
                            <div class="item">
                                <a class="title" href="/current-events/">
                                    <span> Current Events</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </li>


                <!--后续添加-->

                <li tab="3">
                    <a href="https://www.pcbgogo.com/about-us.html">About Us</a>
                    <div class="child-parent">
                        <div class="child-menu">
                            <div class="item">
                                <a class="title" href="https://www.pcbgogo.com/why.html/">
                                    <span>Why choose us？</span>
                                </a>
                            </div>
                            <div class="item">
                                <a class="title" href="https://www.pcbgogo.com/orderguide.html">
                                    <span>Order Guide</span>
                                </a>
                            </div>
                            <div class="item">
                                <a class="title" href="https://www.pcbgogo.com/quality_gurrantee.html">
                                    <span>Quality guarantee</span>
                                </a>
                            </div>

                            <div class="item">
                                <a class="title" href="https://www.pcbgogo.com/PaymentMethod.html">
                                    <span>Method of Payment</span>
                                </a>
                            </div>


                            <div class="item">
                                <a class="title" href="https://www.pcbgogo.com/shipping_method_guide.html">
                                    <span>Shipping methods guide</span>
                                </a>
                            </div>
                            <div class="item">
                                <a class="title" href="https://www.pcbgogo.com/current-events/">
                                    <span>News</span>
                                </a>
                            </div>
                          
                            <div class="item">
                                <a class="title" href="/shipping_method_guide.html">
                                    <span>  Shipping method guide</span>
                                </a>
                            </div>
                           <div class="item">
                                <a class="title" href="https://www.pcbgogo.com/privacy_policy.html">
                                    <span>Privacy Policy</span>
                                </a>
                            </div>
                             <div class="item">
                                <a class="title" href="/terms-service.html">
                                    <span>Terms of Service</span>
                                </a>
                            </div>
                            <!--   pcbgogo delivery 暂时隐藏 该元素保留  -->
                            <div class="item" style="display: none">
                                <a class="title" href="http://www.pcbgogo.com/delivery.html">
                                    <span>PCBgogo delivery</span>
                                </a>
                            </div>
                        </div>

                    </div>
                </li>
                <li>
                    <a href="/help_center.html">Help Center</a>
                </li>
                <li>
                    <a href="contact-us.html">Contact Us</a>
                </li>
            </ul>
        </div>
  </div>`
      return totalHeader
    },
    //url地址加密函数
    compileStr: function (code) {
      var c = String.fromCharCode(code.charCodeAt(0) + code.length)
      for (var i = 1; i < code.length; i++) {
        c += String.fromCharCode(code.charCodeAt(i) + code.charCodeAt(i - 1))
      }
      return escape(c)
    },
    //公用底部
    totalFooter: function () {
      var totalFooter = ` <!--  赞助商-->
  <div class="sponsors">
    <div class="sponsors-box">
      <div class="item">
        <div class="name">Verified by</div>
        <img src="img/images/verified.png" alt="">
      </div>
      <div class="item">
        <div class="name">Delivery Services</div>
        <img src="img/images/delivery.png" alt="">
      </div>
      <div class="item"
           onclick="window.open('https://www.pcbgogo.com/Blog/PCBGOGO_Certificates_of_ISO9001_2015_QMS__UL__REACH__RoHS.html', '_blank')">
        <div class="name">Payment Methods</div>
        <img src="img/images/payments.png" alt="">
      </div>
    </div>
  </div>
  <!--二级列表-->
    <div class="links-type ">
        <div class="container_warp">
            <!--右侧导航-->
            <div class="list-box">
                <ul class="links-title">
                    <li>
                        <p>CAPABILITIES</p>
                        <ul class="links-lists">
                            <li>
                                <h3>
                                    <a href="https://www.pcbgogo.com/Capabilities/PCBA_Capabilities.html">
                                        PCBA Capabilities
                                    </a>
                                </h3>
                            </li>
                            <li>
                                <h3>
                                    <a href="https://www.pcbgogo.com/Capabilities/FR_4_PCB_Manufacturing.html">
                                        FR-4 PCB Capabilities
                                    </a>
                                </h3>
                            </li>
                            <li>
                                <h3>
                                    <a href="https://www.pcbgogo.com/Capabilities/Advanced_PCB_Manufacturing.html">
                                        Advanced PCB Capabilities
                                    </a>
                                </h3>
                            </li>
                            <li>
                                <h3>
                                    <a href="https://www.pcbgogo.com/Capabilities/Aluminum_PCB_Manufacturing.html">
                                        Aluminum PCB Capabilities

                                    </a>
                                </h3>
                            </li>
                            <li>
                                <h3>
                                    <a href="https://www.pcbgogo.com/Capabilities/Copper_PCB_Manufacturing.html">
                                        Copper PCB Capabilities
                                    </a>
                                </h3>
                            </li>
                            <li>
                                <h3>
                                    <a href="https://www.pcbgogo.com/Capabilities/Flexible_PCB_Capabilities.html">
                                        Flexible PCB Capabilities
                                    </a>
                                </h3>
                            </li>
                            <li>
                                <h3>
                                    <a href="https://www.pcbgogo.com/Capabilities/Rigid_Flex_PCB_Capabilities.html">
                                        Rigid-Flex PCB Capabilities
                                    </a>
                                </h3>
                            </li>
                            <li>
                                <p class="links-caption">
                                    OTHERS
                                </p>
                                <h3>
                                    <a href="https://www.pcbgogo.com/Blog/PCBGOGO_Certificates_of_ISO9001_2015_QMS__UL__REACH__RoHS.html">
                                        PCB Certifications
                                    </a>
                                </h3>
                            </li>
                            <li>
                                <h3>
                                    <a href="https://www.pcbgogo.com/knowledge-center/RoHS_lead_Free.html">
                                        RoHS-lead Free PCBs
                                    </a>
                                </h3>
                            </li>
                            <li>
                                <h3>
                                    <a href="https://www.pcbgogo.com/GerberViewer.html">
                                        Online Gerber View
                                    </a>
                                </h3>
                            </li>
                            <li>
                                <h3>
                                    <a href="https://www.pcbgogo.com/knowledge-center/Automated_Optical_Inspection__AOI_.html">
                                        Automated Optical Inspection (AOI)
                                    </a>
                                </h3>
                            </li>
                            <li>
                                <h3>
                                    <a href="https://www.pcbgogo.com/knowledge-center/Automated_X_ray_Inspection__AXI_.html">
                                        Automated X-ray inspection (AXI)
                                    </a>
                                </h3>
                            </li>
                            <li>
                                <h3>
                                    <a href="https://www.pcbgogo.com/knowledge-center/Electrical_Test__E_test_.html">
                                        Electric Test (E-test)
                                    </a>
                                </h3>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p>
                            PCBGOGO SERVICES/PRODUCT
                        </p>
                        <ul class="links-lists">
                            <li>
                                <h3>
                                    <a href="https://www.pcbgogo.com/pcb-fabrication-quote.html">
                                        PCB Instant Quote
                                    </a>
                                </h3>
                            </li>
                            <li>
                                <h3>
                                    <a href="https://www.pcbgogo.com/pcb-assembly.html">
                                        PCB Assembly service
                                    </a>
                                </h3>
                            </li>
                            <li>
                                <h3>
                                    <a href="https://www.pcbgogo.com/hdi-pcb.html">
                                        Advanced PCB
                                    </a>
                                </h3>
                            </li>
                            <li>
                                <h3>
                                    <a href="https://www.pcbgogo.com/flexible-pcb.html">
                                        Flex / Rigid-flex PCB
                                    </a>
                                </h3>
                            </li>
                            <li>
                                <h3>
                                    <a href="https://www.pcbgogo.com/pcbgogo-standard-stackup-for-multilayer-pcbs.pdf">
                                        Multilayer PCB
                                    </a>
                                </h3>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p>HELP & CONTACT</p>
                        <ul class="links-lists">
                            <li>
                                <h3>
                                    <a href="https://www.pcbgogo.com/help_center.html">
                                        Help center
                                    </a>
                                </h3>
                            </li>
                            <li>
                                <h3>
                                    <a href="https://www.pcbgogo.com/contact.html">
                                        Contact us
                                    </a>
                                </h3>
                            </li>
                            <li>
                                <h3>
                                    <a href="https://www.pcbgogo.com/member/login">
                                        Sign In / Register
                                    </a>
                                </h3>
                            </li>
                        </ul>
                        <p class="links-caption">COMMUNITY</p>
                        <ul class="links-lists">
                            <li>
                                <h3>
                                    <a href="https://www.pcbgogo.com/Feedback/">
                                        Feedback
                                    </a>
                                </h3>
                            </li>
                            <li>
                                <h3>
                                    <a href="https://www.pcbgogo.com/forum.html">
                                        Forum
                                    </a>
                                </h3>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p>ABOUT PCBGOGO</p>
                        <ul class="links-lists">
                            <li>
                                <h3>
                                    <a href="/orderguide.html">
                                        introduction
                                    </a>
                                </h3>
                            </li>
                            <li>
                                <h3><a href="/contact.html">
                                    Why Buy From us
                                </a></h3>
                            </li>
                            <li>
                                <h3><a href="/member/login">
                                    Order Guide
                                </a></h3>
                            </li>
                            <li>
                                <h3><a href="/quality_gurrantee.html">
                                    Quality Guarantee
                                </a></h3>
                            </li>
                            <li>
                                <h3><a href="/delivery.html">
                                    Method of Payment
                                </a></h3>
                            </li>
                            <li>
                                <h3><a href="/delivery.html">
                                    Shipping Methods Guide
                                </a></h3>
                            </li>
                            <li>
                                <h3><a href="/delivery.html">
                                    News
                                </a></h3>
                            </li>
                            <li>
                                <h3><a href="/delivery.html">
                                    Privacy Policy
                                </a></h3>
                            </li>
                            <li>
                              <h3><a href="/return-policy.html">
                                   Return policy
                                </a></h3>
                             </li>
                        </ul>
                    </li>
                </ul>
                <div class="link-box">
                    <div class="link-way">
              <span class="app">
                <span class="iconfont icon-shouji2"></span>
                Whatsapp +8618665922549</span>

                        <span class="mail">
               <span class="iconfont icon-jurassic_email"></span>
                        <a href="mailto:service@pcbgogo.com">Mail service@pcbgogo.com</a>
                        </span>

                        <span class="tel">
             <span class="iconfont icon-dianhua"></span> Tel +86-755-33066136</span>
                        <span class="sitemap-link">
                            <a href="sitemap.html" target="_blank">
                                Sitemap
                            </a>
                        </span>
                    </div>
                    <div class="share-box">
                        <a target="_blank" href="https://twitter.com/PCBGOGOofficial"><img
                                src="img/images/twitter.png" alt=""></a>
                        <a target="_blank" href="https://www.youtube.com/channel/UCNKfbfg7u7m8if4aRbfezyg"><img
                                src="img/images/google.png" alt=""></a>
                        <a target="_blank" href="https://www.facebook.com/Pcbgogo-1623727847885541/timeline/"><img
                                src="img/images/facebook.png" alt=""></a>
                        <a target="_blank"
                           href="https://www.linkedin.com/company/13738760?trk=tyah&amp;trkInfo=clickedVertical%3Acompany%2CclickedEntityId%3A10159025%2Cidx%3A1-1-1%2CtarId%3A1442555194895%2Ctas%3Apcbgogo"><img
                                src="img/images/instagram.png" alt=""></a>
                        <a target="_blank" href="https://www.instagram.com/pcbgogo_official/?hl=en"><img
                                src="img/images/Linkedln.png" alt=""></a>
                    </div>
                </div>
            </div>
            <!--左侧表单-->
            <div class="send-from">
                <p>QUICK CONTACT</p>
                <form action="#" class="message-from">
                    <input type="text" placeholder="Name" value="Name" onfocus="if(this.value==='Name')this.value=''"
                           onblur="if(this.value==='')this.value='Name'">
                    <input type="text" placeholder="Email" value="Email"
                           onfocus="if(this.value==='Email')this.value=''"
                           onblur="if(this.value==='')this.value='Email'">
                    <textarea type="text" class="message-input" placeholder="Message"
                              onfocus="if(this.value==='Message')this.value=''"
                              onblur="if(this.value==='')this.value='Message'"></textarea>
                    <input type="button" class="btn-submit " value="Send Message">
                </form>
            </div>
        </div>
    </div>
  <!--  版权-->
  <div class="copyright-box">
    <div class="container_warp">
    Copyright © 2020 PCBGOGO. All rights reserved. Shenzhen JDB Technology Co.,Ltd. Address: No. 15, Zhongxing Road, Kengzi Street, Pingshan District, Shenzhen, 518000, China.
  </div>
  </div>`
      return totalFooter
    },

    // 关于我们公用左侧导航
    totalUsNav: function () {
      var usNav = `
              <a href="contactUs.html" class="left-item active-item">
                    - Contact US
                </a>
                <a href="Introduction.html" class="left-item ">
                    - Introduction
                </a>
                <a href="qualityGurrantee.html" class="left-item">
                    - Quality Gurrantee
                </a>
                <a href="privacyPolicy.html" class="left-item">
                    - Privacy Policy
                </a>
                 <a href="methodPayment.html" class="left-item">
                    - Method Of Payment
                </a>
                 <a href="orderGuide.html" class="left-item">
                    - Order Guide
                </a>
                 <a href="shippingMethod.html" class="left-item">
                    - Shipping Method Guide
                </a>
                 <a href="gogoDelivery.html" class="left-item">
                    - PCBGOGO Delivery
                </a>
                 <a href="terms-service.html" class="left-item">
                    - Terms of Service
                </a>
                  <a href="return-policy.html" class="left-item">
                    - Return policy
                </a>
            `
      return usNav;
    }
  }
  var gogo = new Gogo()
  $('.header').html('').html(gogo.totalHeader()) //动态更换头部
  $('.footer').html('').html(gogo.totalFooter()) //动态更换底部
  //
  if ($('.js-about-l').length > -1) {
    $('.js-about-l').html('').html(gogo.totalUsNav())
    var navHref = window.location.href
    var splitIndex = navHref.lastIndexOf('/') + 1
    var navHash = navHref.substr(splitIndex)
    $('.js-about-l a').each(function () {
      $('.js-about-l a').removeClass('active-item')
      if (navHash === $(this).attr('href')) {
        $(this).addClass('active-item')
        return false;
      }
    })

  }

  //登录检查  ////套用请忽略
  if (gogo.isLogin()) {
    $('.hi-in').show()
    $('.joined').show()
    $('.ads-tips').hide()
    $('.info').eq(0).hide()
    $('.info').eq(1).show()
  } else {
    $('.join').show()
    $('.sign-in').show()
    $('.ads-tips').show()
    $('.info').eq(1).hide()
    $('.info').eq(0).show()

  }

  //登录按钮  ////套用请忽略
  $('.login-in').click(function () {
    if (gogo.isLogin()) {
      $('.join').hide()
      $('.sign-in').hide()
      $('.hi-in').show()
      $('.joined').show()
    } else {
      var urlStr = window.location.pathname//获取之前的地址
      var splitIndex = urlStr.lastIndexOf('/')//截取位置
      var oldStr = urlStr.substr(splitIndex + 1)
      window.location.href = 'login作废.html?=' + gogo.compileStr(oldStr)//加密后的
    }
  })
  // try {
  //
  // } catch (e) {
  //
  // }

  //nowMove函数
  // function nowMove (rightPriceTop) {
  //   var navTop = $(document).scrollTop()
  //   // var floatElement = $('.js-floating-element').height() //移动元素;
  //   // var getDibu = $('.footer').offset().top  //固定元素距离文档顶部距离;
  //   if (navTop >= rightPriceTop) {
  //     $('.js-floating-element').css({ position: 'fixed', top: 44 })
  //     // if ((getDibu - (navTop + floatElement) <= 50)) {
  //     //   $('.js-floating-element')[0].style.cssText = ''
  //     //   $('.js-floating-element').css({ position: 'absolute', bottom: 0 })
  //     // } else {
  //     //   $('.js-floating-element')[0].style.cssText = ''
  //     //   $('.js-floating-element').css({ position: 'fixed', top: 44 })
  //     // }
  //   } else {
  //     $('.js-floating-element').css({ position: 'relative', top: 0 })
  //   }
  //   //end if
  // }//end nowMove(函数);

  //退出登录  ////套用请忽略
  $('.out-btn').click(function () {
    window.localStorage.setItem('pwd', '')
    $(this).parent().hide()
    window.location.reload()
  })

  //实时消息信息列表
  $('.js-messages').mouseleave(function () {
    $('.js-message-list').stop().slideUp(600)
  })
  $('.js-messages').click(function () {
    $('.js-message-list').stop().slideDown(600)
  })
  $('.js-message-list').mouseleave(function () {
    $(this).stop().slideUp(600)
  })

  ////下单计价统一标题  套用忽略
  void function () {
    try {
      let href = ['Prototype', 'Assembly', 'FPCIns', 'SMD']
      const hrefName = window.location.pathname
      let hrefIndex = 0
      href.forEach((item, key) => {
        if (hrefName.indexOf(item) > -1) {
          hrefIndex = key
        }
        if (hrefName.indexOf('rigidflex') > -1) {
          hrefIndex = 2
        }
      })
      var orderNav = `
  <div class="container_warp">
    <!--  对应日文套用删除
  1.オンライン見積 2.データ入稿 3. データチェック
 4. お支払い 5. 生産 6. 運送  7. 受取＆検収
 -->
    <div class="guide-box">
      <div class="item">
        Online Quote
      </div>
      <div class="item">
        Upload Gerber File
      </div>
      <div class="item">
        Order review
      </div>
      <div class="item">
        Payment
      </div>
      <div class="item">
        Fabrication
      </div>
      <div class="item">
        Shipment
      </div>
      <div class="item">
        Confirm and Review
      </div>
    </div>
    <!--banner列表-->
    <div class="order-nav js-order-nav">
      <ul class="banner-ul">
        <li class="active">
          <a href="PCBPrototype.html" target="_blank">
            <div class="order-img">
              <img src="img/images/guide-img1.png" alt="" width="320" height="60">
            </div>
            <div class="name">PCB Prototype</div>
          </a>
        </li>
        <li>
          <a href="PCBAssembly.html" target="_blank">
            <div class="order-img">
              <img src="img/images/guide-img2.png" alt="" width="320" height="60">
            </div>
            <div class="name">
              PCB Assembly
            </div>

          </a>
        </li>
        <li>
          <a href="FPCInstantQuote.html" target="_blank">
            <div class="order-img">
              <img src="img/images/guide-img3.png" alt="" width="320" height="60">
            </div>
            <div class="name">
              FPC Instant Quote
            </div>
          </a>
        </li>
        <li>
          <a href="SMDStencil.html" target="_blank">
            <div class="order-img">
              <img src="img/images/guide-img4.png" alt="" width="320" height="60">
            </div>
            <div class="name">
              SMD Stencil
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
    `
      if (window.location.href.indexOf('index') < -1) {
        $('.banner-box').empty().append(orderNav)
      }
      $('.js-order-nav li').removeClass('active')
      $('.js-order-nav li').eq(hrefIndex).addClass('active')
    } catch (e) {

    }
  }()

})//end function
