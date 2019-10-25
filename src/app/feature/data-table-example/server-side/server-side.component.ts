import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-server-side',
  templateUrl: './server-side.component.html',
  styleUrls: ['./server-side.component.css']
})
export class ServerSideComponent implements OnInit {

  public BASE_URL = environment.baseUrl + environment.doctorChamber;

  @ViewChild('consultationDataGrid') consultationDataGridTable;
  consultationDataGrid: any;
  consultationDataGridObj: any;

  constructor() { }

  ngOnInit() {
    this.initSamplePendingGrid();
  }

  initSamplePendingGrid() {
    let that = this;
    this.consultationDataGrid = $(this.consultationDataGridTable.nativeElement);
    this.consultationDataGridObj = this.consultationDataGrid.DataTable({
      pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: true,
      processing: true,
      ajax: {
        url: this.BASE_URL + "/consulation/gridList",
        type: "GET",
        data: function (sendData) {
         // sendData.fromDate = that.simplePendingfilterParams.fromDate;
        },
        beforeSend: function (xhr) {
          //TODO: Need to change bearer token from static to dynamic
        //  xhr.setRequestHeader('Authorization', "bearer " + that.authService.getAccessToken());
         // xhr.setRequestHeader('Content-Type', "application/json");
        },
        dataSrc: function (response) {
          // console.log("path-simple-pending grid res:", response);
          response.draw = response.obj.draw;
          response.recordsTotal = response.obj.recordsTotal;
          response.recordsFiltered = response.obj.recordsFiltered;
          return response.obj.data;
        }
      },
      "order": [[0, "desc"]],
      columns: [
        {
          title: 'ID #',
          data: 'consultationId',
          name: 'consultationId'
        },
        {
          title: 'Gender',
          data: 'gender'
        },
        {
          title: 'Name',
          data: 'patientName',
          name: 'patientName'
        },
        {
          title: 'Mobile',
          data: 'phoneNo'
        }
      ],
      responsive: true,
      select: true,
      rowCallback: (row: Node, data: any[] | Object) => {
        $('td', row).bind('dblclick', () => {
          that.onDblClickHandler(data);
        });
        $(row).bind('click', () => {
          $(row).removeClass('selected')
          $(row).addClass('selected');
         that.onClickHandelar(data);
        });
        return row;
      }
    });
  }


  onDblClickHandler(obj): void {
    console.log("onDblClickHandler:",obj)
  }


  onClickHandelar(obj): void {
    console.log("onDblClickHandler:",obj)
  }

}
