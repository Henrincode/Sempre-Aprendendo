# 📅 `node-schedule` em Node.js

## 🔰 O que é `node-schedule`?

`node-schedule` é uma biblioteca de agendamento de tarefas (cron jobs) para aplicações Node.js. Ela permite que você execute funções em horários específicos, como tarefas diárias, semanais ou em intervalos personalizados.

É ideal para casos como:

- Enviar emails programados
    
- Limpar banco de dados periodicamente
    
- Executar backups automáticos
    
- Rodar tarefas em horários exatos
    

---

## 🚀 Instalação

```bash
npm install node-schedule
```

---

## 📌 Exemplo Básico

```js
const schedule = require('node-schedule');

const job = schedule.scheduleJob('*/5 * * * * *', () => {
  console.log('Esta tarefa roda a cada 5 segundos');
});
```

> 🧠 _Este agendamento utiliza o formato cron padrão:_
> 
> ```
> *    *    *    *    *    *
> │    │    │    │    │    └─ Dia da semana (0 - 7) (Domingo é 0 ou 7)
> │    │    │    │    └───── Mês (1 - 12)
> │    │    │    └────────── Dia do mês (1 - 31)
> │    │    └─────────────── Hora (0 - 23)
> │    └──────────────────── Minuto (0 - 59)
> └───────────────────────── Segundo (0 - 59) ← só no node-schedule!
> ```

---

## 🕒 Exemplos de Agendamentos

### Rodar todos os dias às 14:30

```js
schedule.scheduleJob('30 14 * * *', () => {
  console.log('Executado às 14:30 todos os dias');
});
```

### Rodar toda segunda-feira às 9:00

```js
schedule.scheduleJob('0 9 * * 1', () => {
  console.log('Executado toda segunda-feira às 9h');
});
```

### Rodar a cada 10 minutos

```js
schedule.scheduleJob('*/10 * * * *', () => {
  console.log('Executado a cada 10 minutos');
});
```

---

## ✅ Agendamento com Objeto (sem cron)

Também é possível agendar com objetos `Date` ou regras específicas:

```js
const date = new Date(2025, 3, 22, 15, 0, 0); // 22 de Abril de 2025 às 15:00

schedule.scheduleJob(date, () => {
  console.log('Executado uma única vez em 22/04/2025 às 15h');
});
```

### Agendamento recorrente com regras

```js
const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [1, 3, 5]; // Segunda, quarta e sexta
regra.hour = 10;
regra.minute = 0;

schedule.scheduleJob(regra, () => {
  console.log('Executado às 10h nas segundas, quartas e sextas');
});
```

---

## 🛑 Cancelando um Job

```js
const job = schedule.scheduleJob('*/1 * * * *', () => {
  console.log('Rodando...');
});

setTimeout(() => {
  job.cancel();
  console.log('Job cancelado!');
}, 300000); // 5 minutos
```

---

## ⚙️ Verificando se o Job ainda está ativo

```js
if (job.nextInvocation()) {
  console.log('O job ainda está agendado');
} else {
  console.log('O job não está mais ativo');
}
```

---

## 🧩 Observações

- O `node-schedule` **não usa `setInterval()`**, mas sim agendamento real baseado em datas e horários do sistema.
    
- Ideal para tarefas que não precisam de precisão milissegundos (não é para _real time_).
    
- Recomendado usar em conjunto com logs, e monitoramento para garantir execução correta.
    

---

## 📚 Recursos Extras

- [Documentação Oficial](https://github.com/node-schedule/node-schedule)
    
- [Guia sobre expressões cron](https://crontab.guru/)