/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '@angular/common';
import * as i2 from './error.component';
import * as i3 from './error.service';
const styles_ErrorComponent:any[] = ['.backdrop[_ngcontent-%COMP%] {\n            background-color: rgba(0,0,0,0.6);\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100vh;\n        }'];
export const RenderType_ErrorComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:0,
    styles:styles_ErrorComponent,data:{}});
export function View_ErrorComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),2,'div',[['class',
      'backdrop']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      i0.ɵdid(278528,(null as any),0,i1.NgStyle,[i0.KeyValueDiffers,i0.ElementRef,
          i0.Renderer],{ngStyle:[0,'ngStyle']},(null as any)),i0.ɵpod({'display':0}),
      (_l()(),i0.ɵted((null as any),['\n'])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          31,'div',[['class','modal'],['role','dialog'],['tabindex','-1']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),i0.ɵdid(278528,
          (null as any),0,i1.NgStyle,[i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],
          {ngStyle:[0,'ngStyle']},(null as any)),i0.ɵpod({'display':0}),(_l()(),i0.ɵted((null as any),
          ['\n    '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),26,'div',[['class',
          'modal-dialog'],['role','document']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n      '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),23,'div',[['class','modal-content']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),8,'div',[['class','modal-header']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n          '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),2,'button',
          [['aria-label','Close'],['class','close'],['type','button']],(null as any),
          [[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i2.ErrorComponent = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.onErrorHandled()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          1,'span',[['aria-hidden','true']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['×'])),(_l()(),
          i0.ɵted((null as any),['\n          '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),1,'h4',[['class','modal-title']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['',''])),(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵted((null as any),
          ['\n        '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),4,'div',[['class',
          'modal-body']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n          '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),1,'p',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['',''])),(_l()(),
          i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵted((null as any),['\n        '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),4,'div',[['class','modal-footer']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n          '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),1,'button',[['class','btn btn-default'],['type','button']],
          (null as any),[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i2.ErrorComponent = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.onErrorHandled()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['Close'])),
      (_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵted((null as any),
          ['\n        '])),(_l()(),i0.ɵted((null as any),['\n    '])),(_l()(),i0.ɵted((null as any),
          ['\n']))],(_ck,_v) => {
    var _co:i2.ErrorComponent = _v.component;
    const currVal_0:any = _ck(_v,2,0,_co.display);
    _ck(_v,1,0,currVal_0);
    const currVal_1:any = _ck(_v,6,0,_co.display);
    _ck(_v,5,0,currVal_1);
  },(_ck,_v) => {
    var _co:i2.ErrorComponent = _v.component;
    const currVal_2:any = ((_co.error == null)? (null as any): _co.error.title);
    _ck(_v,19,0,currVal_2);
    const currVal_3:any = ((_co.error == null)? (null as any): _co.error.message);
    _ck(_v,25,0,currVal_3);
  });
}
export function View_ErrorComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'app-error',([] as any[]),
      (null as any),(null as any),(null as any),View_ErrorComponent_0,RenderType_ErrorComponent)),
      i0.ɵdid(114688,(null as any),0,i2.ErrorComponent,[i3.ErrorService],(null as any),
          (null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const ErrorComponentNgFactory:i0.ComponentFactory<i2.ErrorComponent> = i0.ɵccf('app-error',
    i2.ErrorComponent,View_ErrorComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvdmFkaW1zL2RlbW8vbWVhbmFwcDAwMS9hc3NldHMvYXBwL2Vycm9ycy9lcnJvci5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vQzovVXNlcnMvdmFkaW1zL2RlbW8vbWVhbmFwcDAwMS9hc3NldHMvYXBwL2Vycm9ycy9lcnJvci5jb21wb25lbnQudHMiLCJuZzovLy9DOi9Vc2Vycy92YWRpbXMvZGVtby9tZWFuYXBwMDAxL2Fzc2V0cy9hcHAvZXJyb3JzL2Vycm9yLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvdmFkaW1zL2RlbW8vbWVhbmFwcDAwMS9hc3NldHMvYXBwL2Vycm9ycy9lcnJvci5jb21wb25lbnQudHMuRXJyb3JDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8ZGl2IGNsYXNzPVwiYmFja2Ryb3BcIiBbbmdTdHlsZV09XCJ7J2Rpc3BsYXknOiBkaXNwbGF5fVwiPjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwibW9kYWxcIiB0YWJpbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIFtuZ1N0eWxlXT1cInsnZGlzcGxheSc6IGRpc3BsYXl9XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiIChjbGljayk9XCJvbkVycm9ySGFuZGxlZCgpXCI+PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj48L2J1dHRvbj5cclxuICAgICAgICAgIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+e3sgZXJyb3I/LnRpdGxlIH19PC9oND5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgPHA+e3sgZXJyb3I/Lm1lc3NhZ2UgfX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiAoY2xpY2spPVwib25FcnJvckhhbmRsZWQoKVwiPkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+PCEtLSAvLm1vZGFsLWNvbnRlbnQgLS0+XHJcbiAgICA8L2Rpdj48IS0tIC8ubW9kYWwtZGlhbG9nIC0tPlxyXG48L2Rpdj48IS0tIC8ubW9kYWwgLS0+IiwiPGFwcC1lcnJvcj48L2FwcC1lcnJvcj4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O29CQ0FBO01BQUE7YUFBQTtxQkFBQSxnREFBc0I7TUFBdUMsdUNBQzdEO1VBQUE7VUFBQSxpRUFBQTtVQUFBO1VBQUEsOENBQStDLGdCQUFpQztVQUFBLGFBQzVFO1VBQUE7VUFBQSw4QkFBMEM7TUFDeEM7VUFBQTtNQUEyQiwrQ0FDekI7VUFBQTtVQUFBLDRDQUEwQjtVQUFBLG1CQUN4QjtVQUFBO1VBQUE7WUFBQTtZQUFBO1lBQXVEO2NBQUE7Y0FBQTtZQUFBO1lBQXZEO1VBQUEsZ0NBQWtGO1VBQUE7VUFBQSw4QkFBeUIsc0NBQXVCO2lCQUFBLGtDQUNsSTtVQUFBO1VBQUEsNENBQXdCO1VBQUEsVUFBdUIsK0NBQzNDO1VBQUEsaUJBQ047VUFBQTtNQUF3QixpREFDdEI7VUFBQTtVQUFBLDhCQUFHLHdDQUF3QjtpQkFBQSxnQ0FDdkI7TUFDTjtVQUFBO01BQTBCLGlEQUN4QjtVQUFBO1VBQUE7WUFBQTtZQUFBO1lBQThDO2NBQUE7Y0FBQTtZQUFBO1lBQTlDO1VBQUEsZ0NBQXlFO01BQWMsK0NBQ25GO1VBQUEsaUJBQ3dCLDJDQUNMO1VBQUE7O0lBZlg7SUFBdEIsV0FBc0IsU0FBdEI7SUFDK0M7SUFBL0MsV0FBK0MsU0FBL0M7OztJQUtrQztJQUFBO0lBR3JCO0lBQUE7Ozs7b0JDVGI7TUFBQTthQUFBO1VBQUE7SUFBQTs7OzsifQ==