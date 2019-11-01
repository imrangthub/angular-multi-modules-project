import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-java-script-http',
  templateUrl: './java-script-http.component.html',
  styleUrls: ['./java-script-http.component.css']
})
export class JavaScriptHttpComponent implements OnInit {


  constructor() { }

  ngOnInit() {

    const getReqBtn = document.getElementById('getReqBtn');
    const postReqBtn = document.getElementById('postReqBtn');
    const postReqBtnRaw = document.getElementById('postReqBtnRaw');

    const makeHttpRequest = (method, url, data) => {

      const reqPromise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url)
        xhr.responseType = 'json';
        if (data) {
          xhr.setRequestHeader('Content-Type', 'application/json');
        }
        xhr.onload = () => {
          if(xhr.status >= 400){
             reject(xhr.response);
          }
          resolve(xhr.response);
        }
        xhr.onerror = () => {
          reject("Technical Error found !");
        }

        xhr.send(JSON.stringify(data));
      });

      return reqPromise;
    }




    const getDataReq = () => {
      console.log("getDataReq:");
      makeHttpRequest('GET', 'http://localhost:8090/ap/consulation/list', {}).then(resData => {
        console.log("RES# ", resData);
      })
      .catch(err => {
        console.log(err);
      });
    }

    const postDataReq = () => {
      console.log("postDataReq:");
      makeHttpRequest('POST', 'http://localhost:8090/api/req-check/create', {
        id: 101,
        name: 'MD IMRAN HOSSAIN',
        gender: 'Male'
      }).then(resData => {
        console.log("RES# ", resData);
      });
    }




    const postDataReqRaw = () => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://localhost:8090/api/req-check/list')

      xhr.setRequestHeader('simple-Msg', 'This is a Sample Message in Header');
      xhr.setRequestHeader('my-auth-token', '123456');
      xhr.setRequestHeader('Content-Type', 'application/json');

      xhr.responseType = 'json';
      xhr.onload = () => {
        const resData = xhr.response;
        console.log("POST REQ RAW RES# ", resData);
      }

      xhr.send();
    }


    getReqBtn.addEventListener('click', getDataReq);
    postReqBtn.addEventListener('click', postDataReq);
    postReqBtnRaw.addEventListener('click', postDataReqRaw);

  }

}




// ngOnInit() {

//   const getReqBtn = document.getElementById('getReqBtn');
//   const postReqBtn = document.getElementById('postReqBtn');

//   const getDataReq = () => {
//     console.log("getDataReq:");

//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'http://localhost:8090/api/consulation/list')
//     xhr.responseType = 'json';

//     xhr.onload = () => {
//      // const resData = JSON.parse(xhr.response);
//      const resData = xhr.response;
//       console.log("RES# ", resData);
//     }

//     xhr.send();
//   }

//   const postDataReq = () => {
//     console.log("postDataReq:");
//   }






// getReqBtn.addEventListener('click', getDataReq);
// postReqBtn.addEventListener('click', postDataReq);
// }
