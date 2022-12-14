let instance

/**
 * 统一的音效管理器
 */
export default class Music {
  constructor() {
    if (instance) return instance

    instance = this

    this.bgmAudio = new Audio()
    this.bgmAudio.loop = true
    this.bgmAudio.src = 'images/mp3/bgm.mp3'

    // this.shootAudio = new Audio()
    // this.shootAudio.src = 'audio/bullet.mp3'

    // this.boomAudio = new Audio()
    // this.boomAudio.src = 'audio/boom.mp3'

    this.play()
  }

  play() {
    this.bgmAudio.play()
  }

  pause(){
    this.bgmAudio.pause();
  }

  playShoot() {
    this.shootAudio.currentTime = 0
    this.shootAudio.play()
  }

  playExplosion() {
    this.boomAudio.currentTime = 0
    this.boomAudio.play()
  }
}
