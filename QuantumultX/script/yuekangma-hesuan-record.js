/**
 * 粤康码-核酸记录
 * 域名: zwms.gdbs.gov.cn
 * URL: https://zwms.gdbs.gov.cn/ebus/minshengwxmp/api/r/apiconsole/collection/opc_process/call*
 * @param
 * @date 2022/2/23
 * @author Kenneth & X.
 **/

Date.prototype.Format = function(formatStr)
{
    var str = formatStr;
    var Week = ['日','一','二','三','四','五','六'];

    str=str.replace(/yyyy|YYYY/,this.getFullYear());
    str=str.replace(/yy|YY/,(this.getYear() % 100)>9?(this.getYear() % 100).toString():'0' + (this.getYear() % 100));

    let month = this.getMonth() + 1;
    str=str.replace(/MM/,month > 9 ? month.toString():'0' + month);
    str=str.replace(/M/g,month);

    str=str.replace(/w|W/g,Week[this.getDay()]);

    str=str.replace(/dd|DD/,this.getDate()>9?this.getDate().toString():'0' + this.getDate());
    str=str.replace(/d|D/g,this.getDate());

    str=str.replace(/hh|HH/,this.getHours()>9?this.getHours().toString():'0' + this.getHours());
    str=str.replace(/h|H/g,this.getHours());
    str=str.replace(/mm/,this.getMinutes()>9?this.getMinutes().toString():'0' + this.getMinutes());
    str=str.replace(/m/g,this.getMinutes());

    str=str.replace(/ss|SS/,this.getSeconds()>9?this.getSeconds().toString():'0' + this.getSeconds());
    str=str.replace(/s|S/g,this.getSeconds());

    return str;
}

console.log("response" + $response);

var body = $response.body;
var url = $request.url;
var res = JSON.parse(body);

console.log("body");
console.log(body);
console.log("获取结果");
console.log(res);
var data = res.data;
var records = data.records;

// 动态时间
var myDate = new Date();
var date = myDate.Format("yyyy-MM-dd");
console.log(date);

var lastRecord = {
    "姓名": "李勤",
    "展示来源": "广东省卫生健康委员会",
    "数据来源": "公安",
    "显示时间": date + " 05:00",
    "检测日期": date  + " 05:00:00",
    "检测机构": "深圳和合医学检验实验室",
    "检测类型": "核酸检测",
    "检测结果": "阴性",
    "申报时间": date + " 05:00:00",
    "采样日期": date + " 01:13:49"
}

// 第1条记录
records.unshift(lastRecord);

console.log("调整后记录");
console.log(res);
body = JSON.stringify(res);

$done({body});