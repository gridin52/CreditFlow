import { defineStore } from "pinia";

const initialCreditsData = [
  {
    "id": 7891,
    "creditName": "Кредит на автомобиль",
    "monthlyPaymentDay": 15,
    "totalPaymentAmount": 30000.00,
    "monthlyPayment": 625.00,
    "totalInstallments": 48,
    "installmentsPaid": 20,
    "interestRate": 7.5,
    "isPaidOff": false
  },
  {
    "id": 1023,
    "creditName": "Ипотека на дом",
    "monthlyPaymentDay": 1,
    "totalPaymentAmount": 450000.00,
    "monthlyPayment": 1875.00,
    "totalInstallments": 240,
    "installmentsPaid": 240,
    "interestRate": 4.2,
    "isPaidOff": true
  },
  {
    "id": 4556,
    "creditName": "Потребительский кредит",
    "monthlyPaymentDay": 20,
    "totalPaymentAmount": 12000.00,
    "monthlyPayment": 416.67,
    "totalInstallments": 36,
    "installmentsPaid": 5,
    "interestRate": 11.0,
    "isPaidOff": false
  },
  {
    "id": 8812,
    "creditName": "Рассрочка на технику",
    "monthlyPaymentDay": 10,
    "totalPaymentAmount": 1500.00,
    "monthlyPayment": 125.00,
    "totalInstallments": 12,
    "installmentsPaid": 11,
    "interestRate": 15.5,
    "isPaidOff": false
  },
  {
    "id": 5050,
    "creditName": "Новый кредит наличными",
    "monthlyPaymentDay": 25,
    "totalPaymentAmount": 25000.00,
    "monthlyPayment": 559.48,
    "totalInstallments": 60,
    "installmentsPaid": 0,
    "interestRate": 9.9,
    "isPaidOff": false
  }
];

export const useCreditsStore = defineStore('credits', {
    state: () => ({
        credits: initialCreditsData,
        isLoading: false,
        error: null
    })
})