// Your code here
function createEmployeeRecord(array) {
  return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

// console.log(createEmployeeRecord(['forgi','lotto','mr',30000]))

function createEmployeeRecords(array) {
  const newArray = (array.map(array => createEmployeeRecord(array)))
  return newArray
}
// console.log(createEmployeeRecords([['forgi','otto','mr',30000],['forgi','lotto','mr',30000]]))

function createTimeInEvent(obj, dateStamp) {
  let date = dateStamp.split(' ')
  obj.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(date[1]),
    date: date[0]
  })
  return obj
}

// const record = createEmployeeRecord(['forgi','otto','mr',30000])
// console.log(record)
// createTimeInEvent(record,'2014-02-22 0900')

function createTimeOutEvent(obj, dateStamp) {
  let date = dateStamp.split(' ')
  obj.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(date[1]),
    date: date[0]
  })
  return obj
}

// createTimeOutEvent(record,'2014-02-22 1100')

function hoursWorkedOnDate(obj, date) {
  let inTime =(obj.timeInEvents.find(element => element.date === date))
  let outTime =(obj.timeOutEvents.find(element => element.date === date))
  let inHour = inTime.hour
  let outHour = outTime.hour
  let hoursWorked = (outHour-inHour)/100
  return (hoursWorked)
  // console.log(inTime)
  // console.log(outTime)
  // console.log(inHour)
  // console.log(outHour)
  // console.log(inHour-outHour)
//   const timeIn = obj.timeInEvents[0].hour;
//   const timeOut = obj.timeOutEvents[0].hour;
//   let hoursWorked = timeIn - timeOut
// console.log('In',timeIn)
// console.log('Out',timeOut)
// console.log('hoursWorked',hoursWorked)
}

// hoursWorkedOnDate(record,'2014-02-22')



// function wagesEarnedOnDate(obj, date) {

// }

// function allWagesFor(obj) {
//   wagesEarnedOnDate()
// }

// function calculatePayroll(array) {
//   wagesEarnedOnDate
// }