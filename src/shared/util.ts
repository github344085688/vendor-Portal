import { split, trim, map, difference, constant } from 'lodash-es';
import { Observable } from 'rxjs';
import moment from 'moment';

export default {

  isSubject: (subject: any) => {
    return subject && (
        typeof subject.next === 'function' ||
        typeof subject.onNext === 'function'
      );
  },

  eventToObservable: function (el: any, evtName: Array<any> | string) {
    const evtNames = Array.isArray(evtName) ? evtName : [evtName];
    const obs$ = Observable.create((observer: any) => {
      const eventPairs = evtNames.map(name => {
        const callback = (msg: any) => observer.next({ name, msg });
        el.$on(name, callback);
        return { name, callback };
      });

      return () => {
        // Only remove the specific callback
        eventPairs.forEach(pair => el.$off(pair.name, pair.callback));
      };
    });
    return obs$;
  },

  exportFile(res: any, filename: any , isData: any = true) {
    let blob = new Blob([res], {
      type: 'application/octet-stream'
    });
    let objectUrl = URL.createObjectURL(blob);
    let link = document.createElement('a');
    link.href = objectUrl;
    filename = this.addTimeForFilename(filename, isData);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();

  },

  addTimeForFilename(fileName: string, isData: any = true) {
    if (!isData) return fileName;
    let addTimeForFilename = fileName.split('.');
    let YYMMDDHHMMSS = this.getCurrentYYMMDDHHMMSS();
    return addTimeForFilename[0] + "(" + YYMMDDHHMMSS + ")." + addTimeForFilename[1];
  },

  getCurrentYYMMDDHHMMSS() {
    let date: any = new Date();
    let YY = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let HH = date.getHours();
    let MM = date.getMinutes();

    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;
    HH = HH < 10 ? "0" + HH : HH;
    MM = MM < 10 ? "0" + MM : MM;
    let YYMMDDHHMMSS = YY + month + day + HH + MM ;
    return YYMMDDHHMMSS;
  },

  getBlob(res: any) {
    let blob = new Blob(
      [res],
      {type: "application/octet-stream"}
    );
    return URL.createObjectURL(blob);
  },

  conversionTimeFormat(time: string) {
    return moment(time).format('YYYY/MM/DD hh:mm:ss A');
  }
};
