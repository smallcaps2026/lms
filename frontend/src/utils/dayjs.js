import dayjs from 'dayjs/esm'
import relativeTime from 'dayjs/esm/plugin/relativeTime'
import localizedFormat from 'dayjs/esm/plugin/localizedFormat'
import updateLocale from 'dayjs/esm/plugin/updateLocale'
import isToday from 'dayjs/esm/plugin/isToday'
import isSameOrBefore from 'dayjs/esm/plugin/isSameOrBefore'
import isSameOrAfter from 'dayjs/esm/plugin/isSameOrAfter'
import utc from 'dayjs/esm/plugin/utc'
import timezone from 'dayjs/esm/plugin/timezone'
import 'dayjs/esm/locale/ar'
import 'dayjs/esm/locale/he'
import 'dayjs/esm/locale/fa'
import 'dayjs/esm/locale/ur'
import 'dayjs/esm/locale/es'

dayjs.extend(updateLocale)
dayjs.extend(relativeTime)
dayjs.extend(localizedFormat)
dayjs.extend(isToday)
dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)
dayjs.extend(utc)
dayjs.extend(timezone)

// if (
// 	document.documentElement.dir === 'rtl' &&
// 	['ar', 'he', 'fa', 'ur', 'es'].includes(window.lang)
// ) {
// 	dayjs.locale(window.lang)
// }
dayjs.locale('es')

export default dayjs
