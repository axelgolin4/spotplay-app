// Los controllers se encargan de realizar la logica del negocio

class SongController {
  constructor (servicesSong, song) {
    this._service = servicesSong
    this._entiy = song
  }

  async getAllSong () {
    const response = this._service.getAllTable('song')
    return response
  }

  async createNewSong (song) {
    const newSong = new this._entiy(song)
    console.log(newSong)
    const respose = this._service.save('song', newSong)
    return respose
  }

  async updateSong (song) {
    const newSong = new this._entiy(song)
    newSong.setId(song.id)
    console.log('Controller LOG')
    console.log(newSong)
    const respose = this._service.updateTable('song', newSong)
    return respose
  }

  async deleteSong (song) {
    const respose = this._service.deleteItemTable('song', '_id', song.id)
    return respose
  }
}

export default SongController
