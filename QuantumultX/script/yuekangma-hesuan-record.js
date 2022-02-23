/**
 * 粤康码-核酸记录
 * 域名: zwms.gdbs.gov.cn
 * URL: https://zwms.gdbs.gov.cn/ebus/minshengwxmp/api/r/apiconsole/collection/opc_process/call*
 * @param
 * @date 2022/2/23
 * @author Kenneth & X.
 **/

console.log("response", $response);

var body = $response.body;
var url = $request.url;
var res = JSON.parse(body);

console.log("原始结果", body);
console.log("获取结果", res);
var data = res.data;
var records = data.records;

// 动态时间
var myDate = new Date();
var year = myDate.getFullYear();
var month = myDate.getMonth() > 9 ? myDate.getMonth().toString():'0' + myDate.getMonth();
var day = myDate.getDate() > 9 ? myDate.getDate().toString():'0' + myDate.getDate();
var date = year + "-" + month + "-" + day;
console.log(date);

var lastRecord = {
    "姓名": "李勤",
    "展示来源": "广东省卫生健康委员会",
    "数据来源": "公安",
    "显示时间": date + " 04:00",
    "检测日期": date  + " 04:00:00",
    "检测机构": "深圳和合医学检验实验室",
    "检测类型": "核酸检测",
    "检测结果": "阴性",
    "申报时间": date + " 04:00:00",
    "采样日期": date + " 01:13:49"
}

// 第1条记录
records.unshift(lastRecord);

console.log("调整后记录", res);
body = JSON.stringify(res);

$done({body});