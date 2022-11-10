import './js/libs/weapp-phaser3-adapter'
import './js/libs/symbol'

import {Main} from './js/main'

new Main();

export const worker = wx.createWorker('js/worker/index.js') // 文件名指定 worker 的入口文件路径，绝对路径

