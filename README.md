# phaser3 for wechat game test demo
## Currently Using Phaser3 Build
v3.55.2
## phaser适配：
1. File
   - ImageFile 本地加载逻辑调整
   - JsonFile 本地加载逻辑调整
   - BinaryFile 本地加载逻辑调整
2. Input
   - 由于做了交互的适配，场景交互时交互的Element是没有赋值的，所以在wx环境下对交互的element调整了判断逻辑
3. ScenePlugin
   - 多个场景的启动逻辑需要给每个scene定义key
## 微信
1. 微信分包加载逻辑
