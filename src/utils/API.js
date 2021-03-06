/**
 * @flow
 */

export async function getMusicList() {
  try {
    let result
    const url = 'http://rapapi.org/mockjsdata/16978/rn_songList'
    await fetch(url)
      .then((response) => response.json())
      .then((responseJSON) => {
        result = responseJSON
      })
    return result || {}
  } catch (error) {
    console.error(error)
  }
}

export async function getMusicLrc(songId: string) {
  try {
    let result
    let url = 'http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.song.lry&songid=' + songId
    await fetch(url).then((response) => response.json())
      .then((responseJSON) => {
        result = responseJSON
      })
    return result || {}
  } catch (error) {
    console.error(error)
  }
}

export async function searchMusic(keywords: string) {
  try {
    let result
    const n = '100'
    const url = encodeURI('http://s.music.qq.com/fcgi-bin/music_search_new_platform?t=0&n=' +
      n + '&aggr=1&cr=1&loginUin=0&format=json&inCharset=GB2312&outCharset=utf-8&notice=0&platform=jqminiframe.json&needNewCode=0&p=1&catZhida=0&remoteplace=sizer.newclient.next_song&w=' + keywords);
    await fetch(url).then((response) => response.json())
      .then((responseJSON) => {
        result = responseJSON
      })
    //console.log('result:', result)
    return result || {}
  } catch (error) {
    console.error(error)
  }
}

export async function getNTESHomeMusic() {
  try {
    let result
    const url = 'https://music.163.com/eapi/batch'
    await fetch(url,
      { method: 'POST',
        headers: {
          'Host':'music.163.com',
          'Content-Type':'application/x-www-form-urlencoded',
          //'Cookie':'appver=1.5.2; os=osx; deviceId=F092BBE2-4333-51D9-B9C1-E7F05A75DCDC%7C509AEF28-1102-4DD9-B521-3026A80BC217; __csrf=d00f2b094f2d84a2edb5cc47f2765b12; channel=netease; MUSIC_A=f88484d9aab436e0bd3436b60457e9b1b616d83c997988c3ad159e800faa0f5512c69a0500fa43c4b42526899ed505fedec7e3a400545db058734b2da274776f6b5ac8e8449bb0e295077b9185a44fab337cdc05c4f112f507901cb8f46fbcaa5632f2b9c00610509d1585c5e7958cf81bdbe48c2c785fb5; osver=%E7%89%88%E6%9C%AC%2010.12.4%EF%BC%88%E7%89%88%E5%8F%B7%2016E195%EF%BC%89;',
          //'Origin': 'orpheus://orpheus',
          //'Content-Length': '1191',
          //'Connection': 'keep-alive',
          //'Accept': '*/*',
          //'batch-method': 'GET',
          //'Accept-Language': 'zh-cn',
          //'Accept-Encoding': 'gzip, deflate',
        },
        mode: "cors",
        body: 'params=0BD8BB39A78692F1744DEFF63EBC30F7889FA0D28FD18C56783C7BF3AADA4C516E269DCEF72717031B0D0797563D21D74A80931032E90A0DBF772B7B86DAB7B29C47227066BA6859EF81B2BDC94960501592EFDBED2FA4BB612DD34C3BE69C1CB997189A2D14BE23FACD2D81694F87D73BE3B18DBF893A756694E589F89B42AAB91DEAD4FC3DD1D6A32769DF2F5796697FDBCF77DA22911EFA87A0B24A2F0DBA0EA7346BECA662EA6F38B480DE914A2FBE5C26CC5927694F9C5489DF70D6934C47C4E63A0C863E2D67BF358DE65E75BD25A1DF6264D9615AE93EA31D67D70A0F0A1A23B5AF11ED03FB53B742493AB535AD9A9F926C5E1B3979139277DBCDF27E7EB4BFC0C4996CD069835883475527C7D296034459225E90FC0FD45F259EDAD783303C518B4999C2AC20A0655FEA0E60339FEB1E4C893BEAFA98136513BDD8CD7CAA028F9FC9201202064544B3D84346267E6BA157E3256F2924B9A2DD0B1F4C001E848DC9F85F05DE82FCCA50763549329EF9DF1BC9746B9CFB7308D72159C5A5DC242B76960F7E62827FD52B8F4BCF7A667EBDAD93E5D34CB68D92ECBCD7FEE9265DD359457ED508F38B088041E5BBFDB949F891FA490B48B24C2C754762F31DC4C0F0C8E3930D08A628D82D10C6CADDEA0BBDF8D9FF405C9FE9B2E5622BD99757F50109BF2BBE0B6804606EB5EF23E3D772D023013244905739680AC5801E039D02D768DDB47BE085BE698DFA91C29B13F34AFEC3DA8E69251F8EB21D1A1143789FDF1CFC699E5D9AEC41D952D77B33FD9BBB5556C7E804144D97D10EBC6E6224D67A3F741BEFC55B6196540E7F7B',
      }).then((response) => response.json())
      .then((responseJSON) => {
      result = responseJSON
    })
    return result || {}
  } catch (error) {
    console.error(error)
  }
}