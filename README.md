# phaser3 for wechat game test demo
## Currently Using Phaser3 Build
v3.6.0
## phaser适配：
1. File
   - ImageFile 本地加载逻辑调整
   - JsonFile 本地加载逻辑调整
   - BinaryFile 本地加载逻辑调整
2. Input
   - 由于做了交互的适配，场景交互时交互的Element是没有赋值的，所以在wx环境下对交互的element调整了判断逻辑
3. 微信分包加载逻辑
