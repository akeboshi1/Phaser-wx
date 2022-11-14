# phaser3 for wechat game test demo
## Currently Using Phaser3 Build
v3.55.2
## phaser适配：
1. File
   - ImageFile 本地加载逻辑调整
   - JsonFile 本地加载逻辑调整
   - BinaryFile 本地加载逻辑调整
   - AudioFile 本地加载逻辑调整
   所有的本地File资源需要在**xhrsetting**中加入**wechatdebug:true**,以此标记是否是本地测试
   eg:![image](https://user-images.githubusercontent.com/18412751/201629038-29753f72-5e9a-42e4-bc14-823da8962ae4.png)

2. Input
   - 由于做了交互的适配，场景交互时交互的Element是没有赋值的，所以在wx环境下对交互的element调整了判断逻辑
3. ScenePlugin
   - 多个场景的启动逻辑需要给每个scene定义key
## 微信
1. 微信分包加载逻辑
2. 微信worker功能由于只能通过主包加载，所以对其大小有所限制，导致worker功能偏弱
3. 利用小游戏api创建innerAudioContext播放音乐,来代替phaser3中的音效实现
