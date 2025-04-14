// task 2
function showMySurname () {
  console.log('Surname')
}

// task 3
function task3 () {
  let a = 1
  let b = 2
  console.log(`a = ${a}`)
  console.log(`b = ${b}`)

  b = a
  console.log(`a = ${a}`)
  console.log(`b = ${b}`)
}

// task 4
function task4 () {
  const obj = {
    name: 'Roman',
    age: 10,
    male: true,
    spec_rank: undefined,
    machine_owner: null
  }

  console.log(obj)
}

// task 5
function task5 () {
  const isAdult = confirm('Are you 18 years old?')
  console.log(`isAdult = ${isAdult}`)
}

// task 6
function task6 () {
  const name = 'Roman'
  const surname = 'Surname'
  const study_unit = 'AFH'
  const birth_year = 1990
  const marital_status = 'single'

  console.log(`Birth year: ${birth_year}`)
  console.log(`Name: ${name}`)
  console.log(`Surname: ${surname}`)
  console.log(`Study unit: ${study_unit}`)
  console.log(`Marital status: ${marital_status}`)

  const n = null
  const un = undefined
  console.log(`"n" type is: ${typeof n}`)
  console.log(`"un" type is: ${typeof un}`)
}

// task 7
function task7 () {
  const login = prompt('Enter login')
  const email = prompt('Enter email')
  const password = prompt('Enter password')
  alert(`Dear ${login}, your email is ${email}, your password is $${password}`)
}

// task 8
function task8 () {
  const sec_per_hour = 60 * 60
  const sec_per_day = sec_per_hour * 24
  const sec_per_month = sec_per_day * 31

  alert(
    `Secons per hour: ${sec_per_hour}\nSecons per day: ${sec_per_day}\nSecons per month: ${sec_per_month}`
  )
}
