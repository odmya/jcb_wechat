import moment from 'moment'
import 'moment/locale/zh-cn'

const diffForHumans = (date, format='YYYYMMDD H:mm:ss') => {
  moment.locale('zh-cn')
  return moment(date, format).fromNow()
}


const diffForJiyi = (date, format='YYYYMMDD H:mm:ss') => {
	moment.locale('zh-cn')
	if(date ==1 ){
		return moment().hour(1).toNow() 
	}else if(date ==2){
		return moment().date(1).toNow() 
	}else if(date ==3){
		return moment().date(2).toNow() 
	}else if(date ==4){
		return moment().date(5).toNow() 
	}else if(date ==5){
		return moment().date(7).toNow() 
	}else if(date ==6){
		return moment().date(15).toNow() 
	}
  
  
  
}

export default {
  diffForHumans,
  diffForJiyi
}