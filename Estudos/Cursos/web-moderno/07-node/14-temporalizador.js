const schedule = require('node-schedule')

// Agenda a Tarefa 1 para executar a cada 5 segundos
const tarefa1 = schedule.scheduleJob('*/5 * * * * *', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

// Cancela a Tarefa 1 após 20 segundos
setTimeout(function() {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)

// setImmediate executa uma função imediatamente após o ciclo atual do event loop
// setInterval executa uma função repetidamente em intervalos de tempo definidos

// Define uma regra de recorrência para a Tarefa 2
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)] // Executa de segunda (1) a sexta (5)
regra.hour = 10 // Às 10 horas 
regra.second = 20 // No segundo 20

// Agenda a Tarefa 2 com base na regra de recorrência
const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})