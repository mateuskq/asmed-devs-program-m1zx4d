export const orders = [
  {
    id: 'zliQHP4E8',
    user: {
      paymentStatus: 1,
      email: null,
      subscriptionId: 'wsoH0vfbr',
      id: 'RfUu86ObCBbFp7ychB6Ru8Z1O593',
      franchiseId: 'MAO',
      name: 'Joana Macedo Campos',
      cpf: '865.123.232-20',
      phoneNumber: '+5599988888888',
      subscriptionDate: {
        seconds: 1561864787,
        nanoseconds: 818000000
      }
    },
    paymentMethod: 'bank_slip',
    plan: {
      value: 120,
      perCapita: 120,
      id: 'pg-1',
      discount: 0,
      name: 'Individual',
      count: 1
    },
    state: 1,
    calculations: {
      promoCodeDiscount: 0,
      rawTotal: 120,
      discount: 0,
      coreDiscount: 0,
      discountedTotal: 120
    },
    promoCode: null,
    paymentMetadata: {
      subscription: {
        customer: {
          email: 'alt.gsj@gmail.com',
          id: 9391587,
          name: 'Altenor Gonçalves da Silva Júnior',
          code: null
        },
        billing_cycles: null,
        payment_profile: null,
        next_billing_at: '2020-07-02T00:00:00.000-03:00',
        created_at: '2019-07-02T20:18:29.068-03:00',
        plan: {
          id: 90785,
          name: 'ASMED Brasil - Anual',
          code: 'anual-plan'
        },
        billing_trigger_day: 0,
        current_period: {
          billing_at: '2019-07-02T00:00:00.000-03:00',
          cycle: 1,
          start_at: '2019-07-02T00:00:00.000-03:00',
          id: 26331312,
          end_at: '2020-07-01T23:59:59.000-03:00',
          duration: 31622399
        },
        start_at: '2019-07-02T00:00:00.000-03:00',
        code: 'zliQHP4E8',
        end_at: null,
        cancel_at: null,
        invoice_split: false,
        id: 7323644,
        billing_trigger_type: 'beginning_of_period',
        metadata: {},
        status: 'active',
        payment_method: {
          public_name: 'Boleto bancário',
          type: 'PaymentMethod::BankSlip',
          id: 34237,
          name: 'Boleto bancário - Aceita Fácil',
          code: 'bank_slip'
        },
        interval: 'months',
        installments: 1,
        updated_at: '2019-07-02T20:18:29.068-03:00',
        overdue_since: null,
        interval_count: 12,
        product_items: [
          {
            status: 'active',
            id: 9873156,
            uses: 1,
            pricing_schema: {
              schema_type: 'per_unit',
              pricing_ranges: [],
              id: 8938252,
              created_at: '2019-06-29T22:43:25.000-03:00',
              price: '120.0',
              short_format: 'R$ 120,00 / pessoas/ano',
              minimum_price: null
            },
            cycles: null,
            created_at: '2019-07-02T20:18:29.000-03:00',
            updated_at: '2019-07-02T20:18:29.000-03:00',
            discounts: [],
            quantity: 1,
            product: {
              id: 393013,
              name: 'Assinatura ASMED Brasil',
              code: 'anual-subscription'
            }
          }
        ]
      },
      bill: {
        seen_at: null,
        customer: {
          email: 'alt.gsj@gmail.com',
          id: 9391587,
          name: 'Altenor Gonçalves da Silva Júnior',
          code: null
        },
        id: 48734499,
        payment_profile: null,
        charges: [],
        subscription: {
          customer: {
            email: 'alt.gsj@gmail.com',
            id: 9391587,
            name: 'Altenor Gonçalves da Silva Júnior',
            code: null
          },
          plan: {
            id: 90785,
            name: 'ASMED Brasil - Anual',
            code: 'anual-plan'
          },
          id: 7323644,
          code: 'zliQHP4E8'
        },
        created_at: '2019-07-02T20:18:29.000-03:00',
        metadata: {},
        amount: '120.0',
        status: 'paid',
        due_at: '2019-07-08T23:59:59.000-03:00',
        installments: 1,
        updated_at: '2019-07-04T11:40:43.592-03:00',
        url:
          'https://app.vindi.com.br/customer/bills/48734499?token=67cd1eb7-3dd2-4db7-95ce-87af9baf31bf',
        payment_condition: null,
        billing_at: null,
        code: null,
        period: {
          billing_at: '2019-07-02T00:00:00.000-03:00',
          cycle: 1,
          start_at: '2019-07-02T00:00:00.000-03:00',
          id: 26331312,
          end_at: '2020-07-01T23:59:59.000-03:00',
          duration: 31622399
        },
        bill_items: [
          {
            id: 57989993,
            pricing_schema: {
              schema_type: 'per_unit',
              pricing_ranges: [],
              id: 8938252,
              created_at: '2019-06-29T22:43:25.000-03:00',
              price: '120.0',
              short_format: 'R$ 120,00 / pessoas/ano',
              minimum_price: null
            },
            pricing_range_id: null,
            discount: null,
            description: null,
            product_item: {
              id: 9873156,
              product: {
                id: 393013,
                name: 'Assinatura ASMED Brasil',
                code: 'anual-subscription'
              }
            },
            quantity: 1,
            product: {
              id: 393013,
              name: 'Assinatura ASMED Brasil',
              code: 'anual-subscription'
            },
            amount: '120.0'
          }
        ]
      }
    },
    installments: 1,
    creationDate: new Date('2019-07-02T23:18:28.740Z'),
    lastUpdate: '2019-07-04T19:39:26.140Z',
    paymentDate: new Date('2019-07-04T03:00:00.000Z')
  },
  {
    id: '2vnA-8QVJ',
    user: {
      paymentStatus: 1,
      email: null,
      subscriptionId: 'wsoH0vfbr',
      id: 'RfUu86ObCBbFp7ychB6Ru8Z1O593',
      franchiseId: 'MAO',
      name: 'Joana Macedo Campos',
      cpf: '865.123.232-20',
      phoneNumber: '+5599988888888',
      subscriptionDate: {
        seconds: 1561864787,
        nanoseconds: 818000000
      }
    },
    paymentMethod: 'bank_slip',
    plan: {
      value: 120,
      perCapita: 120,
      id: 'pg-1',
      discount: 0,
      name: 'Individual',
      count: 1
    },
    state: 0,
    calculations: {
      promoCodeDiscount: 0,
      rawTotal: 120,
      discount: 0,
      coreDiscount: 0,
      discountedTotal: 120
    },
    promoCode: null,
    paymentMetadata: {
      subscription: {
        customer: {
          email: 'alt.gsj@gmail.com',
          id: 9391587,
          name: 'Altenor Gonçalves da Silva Júnior',
          code: null
        },
        billing_cycles: null,
        payment_profile: null,
        next_billing_at: '2020-07-02T00:00:00.000-03:00',
        created_at: '2019-07-02T19:53:29.821-03:00',
        plan: {
          id: 90785,
          name: 'ASMED Brasil - Anual',
          code: 'anual-plan'
        },
        billing_trigger_day: 0,
        current_period: {
          billing_at: '2019-07-02T00:00:00.000-03:00',
          cycle: 1,
          start_at: '2019-07-02T00:00:00.000-03:00',
          id: 26331158,
          end_at: '2020-07-01T23:59:59.000-03:00',
          duration: 31622399
        },
        start_at: '2019-07-02T00:00:00.000-03:00',
        code: '2vnA-8QVJ',
        end_at: null,
        cancel_at: null,
        invoice_split: false,
        id: 7323493,
        billing_trigger_type: 'beginning_of_period',
        metadata: {},
        status: 'active',
        payment_method: {
          public_name: 'Boleto bancário',
          type: 'PaymentMethod::BankSlip',
          id: 34237,
          name: 'Boleto bancário - Aceita Fácil',
          code: 'bank_slip'
        },
        interval: 'months',
        installments: 1,
        updated_at: '2019-07-02T19:53:29.821-03:00',
        overdue_since: null,
        interval_count: 12,
        product_items: [
          {
            status: 'active',
            id: 9872965,
            uses: 1,
            pricing_schema: {
              schema_type: 'per_unit',
              pricing_ranges: [],
              id: 8938252,
              created_at: '2019-06-29T22:43:25.000-03:00',
              price: '120.0',
              short_format: 'R$ 120,00 / pessoas/ano',
              minimum_price: null
            },
            cycles: null,
            created_at: '2019-07-02T19:53:29.000-03:00',
            updated_at: '2019-07-02T19:53:29.000-03:00',
            discounts: [],
            quantity: 1,
            product: {
              id: 393013,
              name: 'Assinatura ASMED Brasil',
              code: 'anual-subscription'
            }
          }
        ]
      },
      bill: {
        id: 48733597,
        created_at: '2019-07-02T19:53:29.000-03:00',
        payment_profile: null,
        charges: [
          {
            id: 47489380,
            paid_at: null,
            created_at: '2019-07-02T19:53:30.000-03:00',
            amount: '120.0',
            status: 'pending',
            payment_method: {
              public_name: 'Boleto bancário',
              type: 'PaymentMethod::BankSlip',
              id: 34237,
              name: 'Boleto bancário - Aceita Fácil',
              code: 'bank_slip'
            },
            due_at: '2019-07-08T23:59:59.000-03:00',
            installments: 1,
            updated_at: '2019-07-02T19:53:30.000-03:00',
            print_url:
              'https://api.aceitafacil.com/boleto/75865e10-6853-4b5b-9607-d1241a28fc15/',
            last_transaction: {
              fraud_detector_status: null,
              fraud_detector_score: null,
              id: 79371289,
              gateway_authorization: '',
              payment_profile: null,
              fraud_detector_id: null,
              created_at: '2019-07-02T19:53:30.000-03:00',
              amount: '120.0',
              status: 'waiting',
              gateway: { id: 30047, connector: 'aceita_facil' },
              gateway_response_code: null,
              installments: 1,
              gateway_message: 'AWAITING_PAYMENT_CONFIRMATION',
              gateway_transaction_id:
                '65a1e6b2-aff0-4480-b5bd-068668aa6bbf',
              transaction_type: 'charge',
              gateway_response_fields: {
                barcode:
                  '34195794400000120001090238659380445496789000',
                state: {
                  name: 'AWAITING_PAYMENT_CONFIRMATION',
                  code: '3001'
                },
                id: '8fb7d3d9-daa5-4161-9afb-79674178f256',
                typeable_barcode:
                  '34191.09024 38659.380448 54967.890002 5 79440000012000',
                charge_id: 'c373d5c6-5c84-4205-bf02-a2270128471a',
                print_url:
                  'https://api.aceitafacil.com/boleto/75865e10-6853-4b5b-9607-d1241a28fc15/',
                nsu: '109/02386593-8'
              }
            },
            next_attempt: null,
            attempt_count: 1
          }
        ],
        amount: '120.0',
        status: 'pending',
        url:
          'https://app.vindi.com.br/customer/bills/48733597?token=70cf1277-a26b-4eec-b60c-65cdd4250ca5',
        billing_at: null,
        due_at: '2019-07-08T23:59:59.000-03:00',
        installments: 1,
        code: null
      }
    },
    installments: 1,
    creationDate: new Date('2019-07-02T22:53:18.040Z'),
    lastUpdate: '2019-07-02T22:53:18.040Z',
    paymentDate: null
  },
  {
    id: 'm_0rMfse9',
    user: {
      paymentStatus: 1,
      email: null,
      subscriptionId: 'wsoH0vfbr',
      id: 'RfUu86ObCBbFp7ychB6Ru8Z1O593',
      franchiseId: 'MAO',
      name: 'Joana Macedo Campos',
      cpf: '865.123.232-20',
      phoneNumber: '+5599988888888',
      subscriptionDate: {
        seconds: 1561864787,
        nanoseconds: 818000000
      }
    },
    paymentMethod: 'bank_slip',
    plan: {
      value: 120,
      perCapita: 120,
      id: 'pg-1',
      discount: 0,
      name: 'Individual',
      count: 1
    },
    state: 0,
    calculations: {
      promoCodeDiscount: 0,
      rawTotal: 120,
      discount: 0,
      coreDiscount: 0,
      discountedTotal: 120
    },
    promoCode: null,
    paymentMetadata: {
      subscription: {
        customer: {
          email: 'alt.gsj@gmail.com',
          id: 9391587,
          name: 'Altenor Gonçalves da Silva Júnior',
          code: null
        },
        billing_cycles: null,
        payment_profile: null,
        next_billing_at: '2020-07-02T00:00:00.000-03:00',
        created_at: '2019-07-02T19:15:36.577-03:00',
        plan: {
          id: 90785,
          name: 'ASMED Brasil - Anual',
          code: 'anual-plan'
        },
        billing_trigger_day: 0,
        current_period: {
          billing_at: '2019-07-02T00:00:00.000-03:00',
          cycle: 1,
          start_at: '2019-07-02T00:00:00.000-03:00',
          id: 26330886,
          end_at: '2020-07-01T23:59:59.000-03:00',
          duration: 31622399
        },
        start_at: '2019-07-02T00:00:00.000-03:00',
        code: 'm_0rMfse9',
        end_at: null,
        cancel_at: null,
        invoice_split: false,
        id: 7323222,
        billing_trigger_type: 'beginning_of_period',
        metadata: {},
        status: 'active',
        payment_method: {
          public_name: 'Boleto bancário',
          type: 'PaymentMethod::BankSlip',
          id: 34237,
          name: 'Boleto bancário - Aceita Fácil',
          code: 'bank_slip'
        },
        interval: 'months',
        installments: 1,
        updated_at: '2019-07-02T19:15:36.577-03:00',
        overdue_since: null,
        interval_count: 12,
        product_items: [
          {
            status: 'active',
            id: 9872618,
            uses: 1,
            pricing_schema: {
              schema_type: 'per_unit',
              pricing_ranges: [],
              id: 8938252,
              created_at: '2019-06-29T22:43:25.000-03:00',
              price: '120.0',
              short_format: 'R$ 120,00 / pessoas/ano',
              minimum_price: null
            },
            cycles: null,
            created_at: '2019-07-02T19:15:36.000-03:00',
            updated_at: '2019-07-02T19:15:36.000-03:00',
            discounts: [],
            quantity: 1,
            product: {
              id: 393013,
              name: 'Assinatura ASMED Brasil',
              code: 'anual-subscription'
            }
          }
        ]
      },
      bill: {
        id: 48732329,
        created_at: '2019-07-02T19:15:36.000-03:00',
        payment_profile: null,
        charges: [
          {
            id: 47488163,
            paid_at: null,
            created_at: '2019-07-02T19:15:36.000-03:00',
            amount: '120.0',
            status: 'pending',
            payment_method: {
              public_name: 'Boleto bancário',
              type: 'PaymentMethod::BankSlip',
              id: 34237,
              name: 'Boleto bancário - Aceita Fácil',
              code: 'bank_slip'
            },
            due_at: '2019-07-08T23:59:59.000-03:00',
            installments: 1,
            updated_at: '2019-07-02T19:15:37.000-03:00',
            print_url:
              'https://api.aceitafacil.com/boleto/2fb2bfe0-32ca-45c9-97ef-d7ae9c95ce63/',
            last_transaction: {
              fraud_detector_status: null,
              fraud_detector_score: null,
              id: 79369506,
              gateway_authorization: '',
              payment_profile: null,
              fraud_detector_id: null,
              created_at: '2019-07-02T19:15:36.000-03:00',
              amount: '120.0',
              status: 'waiting',
              gateway: { id: 30047, connector: 'aceita_facil' },
              gateway_response_code: null,
              installments: 1,
              gateway_message: 'AWAITING_PAYMENT_CONFIRMATION',
              gateway_transaction_id:
                'd03e3d75-6fde-45d7-8dc6-5c0ee57298e1',
              transaction_type: 'charge',
              gateway_response_fields: {
                barcode:
                  '34196794400000120001090238655810445496789000',
                state: {
                  name: 'AWAITING_PAYMENT_CONFIRMATION',
                  code: '3001'
                },
                id: '3da13ef6-b47d-4cc2-bf0c-dc33462bfed2',
                typeable_barcode:
                  '34191.09024 38655.810448 54967.890002 6 79440000012000',
                charge_id: '84239a06-1ee4-4c49-b691-42255a54ed2e',
                print_url:
                  'https://api.aceitafacil.com/boleto/2fb2bfe0-32ca-45c9-97ef-d7ae9c95ce63/',
                nsu: '109/02386558-1'
              }
            },
            next_attempt: null,
            attempt_count: 1
          }
        ],
        amount: '120.0',
        status: 'pending',
        url:
          'https://app.vindi.com.br/customer/bills/48732329?token=457bdd10-5edc-4a5e-87fb-9c6739743fc2',
        billing_at: null,
        due_at: '2019-07-08T23:59:59.000-03:00',
        installments: 1,
        code: null
      }
    },
    installments: 1,
    creationDate: new Date('2019-07-02T22:15:32.880Z'),
    lastUpdate: '2019-07-02T22:15:32.880Z',
    paymentDate: null
  },
  {
    id: 'NMcAxCIA6',
    user: {
      paymentStatus: 1,
      email: null,
      subscriptionId: 'wsoH0vfbr',
      id: 'RfUu86ObCBbFp7ychB6Ru8Z1O593',
      franchiseId: 'MAO',
      name: 'Joana Macedo Campos',
      cpf: '865.123.232-20',
      phoneNumber: '+5599988888888',
      subscriptionDate: {
        seconds: 1561864787,
        nanoseconds: 818000000
      }
    },
    paymentMethod: 'bank_slip',
    plan: {
      value: 120,
      perCapita: 120,
      id: 'pg-1',
      discount: 0,
      name: 'Individual',
      count: 1
    },
    state: 0,
    calculations: {
      promoCodeDiscount: 0,
      rawTotal: 120,
      discount: 0,
      coreDiscount: 0,
      discountedTotal: 120
    },
    promoCode: null,
    paymentMetadata: {
      subscription: {
        customer: {
          email: 'alt.gsj@gmail.com',
          id: 9391587,
          name: 'Altenor Gonçalves da Silva Júnior',
          code: null
        },
        billing_cycles: null,
        payment_profile: null,
        next_billing_at: '2020-07-02T00:00:00.000-03:00',
        created_at: '2019-07-02T19:02:10.386-03:00',
        plan: {
          id: 90785,
          name: 'ASMED Brasil - Anual',
          code: 'anual-plan'
        },
        billing_trigger_day: 0,
        current_period: {
          billing_at: '2019-07-02T00:00:00.000-03:00',
          cycle: 1,
          start_at: '2019-07-02T00:00:00.000-03:00',
          id: 26330752,
          end_at: '2020-07-01T23:59:59.000-03:00',
          duration: 31622399
        },
        start_at: '2019-07-02T00:00:00.000-03:00',
        code: 'NMcAxCIA6',
        end_at: null,
        cancel_at: null,
        invoice_split: false,
        id: 7323123,
        billing_trigger_type: 'beginning_of_period',
        metadata: {},
        status: 'active',
        payment_method: {
          public_name: 'Boleto bancário',
          type: 'PaymentMethod::BankSlip',
          id: 34237,
          name: 'Boleto bancário - Aceita Fácil',
          code: 'bank_slip'
        },
        interval: 'months',
        installments: 1,
        updated_at: '2019-07-02T19:02:10.386-03:00',
        overdue_since: null,
        interval_count: 12,
        product_items: [
          {
            status: 'active',
            id: 9872491,
            uses: 1,
            pricing_schema: {
              schema_type: 'per_unit',
              pricing_ranges: [],
              id: 8938252,
              created_at: '2019-06-29T22:43:25.000-03:00',
              price: '120.0',
              short_format: 'R$ 120,00 / pessoas/ano',
              minimum_price: null
            },
            cycles: null,
            created_at: '2019-07-02T19:02:10.000-03:00',
            updated_at: '2019-07-02T19:02:10.000-03:00',
            discounts: [],
            quantity: 1,
            product: {
              id: 393013,
              name: 'Assinatura ASMED Brasil',
              code: 'anual-subscription'
            }
          }
        ]
      },
      bill: {
        id: 48731838,
        created_at: '2019-07-02T19:02:10.000-03:00',
        payment_profile: null,
        charges: [
          {
            id: 47487718,
            paid_at: null,
            created_at: '2019-07-02T19:02:10.000-03:00',
            amount: '120.0',
            status: 'pending',
            payment_method: {
              public_name: 'Boleto bancário',
              type: 'PaymentMethod::BankSlip',
              id: 34237,
              name: 'Boleto bancário - Aceita Fácil',
              code: 'bank_slip'
            },
            due_at: '2019-07-08T23:59:59.000-03:00',
            installments: 1,
            updated_at: '2019-07-02T19:02:49.000-03:00',
            print_url:
              'https://api.aceitafacil.com/boleto/acaa134d-2f57-40c0-b071-7c830ce4964e/',
            last_transaction: {
              fraud_detector_status: null,
              fraud_detector_score: null,
              id: 79368888,
              gateway_authorization: '',
              payment_profile: null,
              fraud_detector_id: null,
              created_at: '2019-07-02T19:02:10.000-03:00',
              amount: '120.0',
              status: 'waiting',
              gateway: { id: 30047, connector: 'aceita_facil' },
              gateway_response_code: null,
              installments: 1,
              gateway_message: 'AWAITING_PAYMENT_CONFIRMATION',
              gateway_transaction_id:
                'b5ec0dc2-3139-4fc2-9d11-7452e72f8137',
              transaction_type: 'charge',
              gateway_response_fields: {
                barcode:
                  '34198794400000120001090238654330445496789000',
                state: {
                  name: 'AWAITING_PAYMENT_CONFIRMATION',
                  code: '3001'
                },
                id: '076a8148-f4f3-4984-b798-39d5116e732a',
                typeable_barcode:
                  '34191.09024 38654.330448 54967.890002 8 79440000012000',
                charge_id: '3e4da475-5a8c-4e4e-8c2c-fce6a7d3ffa4',
                print_url:
                  'https://api.aceitafacil.com/boleto/acaa134d-2f57-40c0-b071-7c830ce4964e/',
                nsu: '109/02386543-3'
              }
            },
            next_attempt: null,
            attempt_count: 1
          }
        ],
        amount: '120.0',
        status: 'pending',
        url:
          'https://app.vindi.com.br/customer/bills/48731838?token=2632082d-5e43-4fe0-902d-b170f1c0c26a',
        billing_at: null,
        due_at: '2019-07-08T23:59:59.000-03:00',
        installments: 1,
        code: null
      }
    },
    installments: 1,
    creationDate: new Date('2019-07-02T22:01:46.290Z'),
    lastUpdate: '2019-07-02T22:01:46.290Z',
    paymentDate: null
  },
  {
    id: 'HbWFoOJV_',
    user: {
      paymentStatus: 1,
      email: null,
      subscriptionId: 'wsoH0vfbr',
      id: 'RfUu86ObCBbFp7ychB6Ru8Z1O593',
      franchiseId: 'MAO',
      name: 'Joana Macedo Campos',
      cpf: '865.123.232-20',
      phoneNumber: '+5599988888888',
      subscriptionDate: {
        seconds: 1561864787,
        nanoseconds: 818000000
      }
    },
    paymentMethod: 'promo_code',
    plan: {
      value: 120,
      perCapita: 120,
      id: 'pg-1',
      discount: 0,
      name: 'Individual',
      count: 1
    },
    state: 1,
    calculations: {
      promoCodeDiscount: 120,
      rawTotal: 120,
      discount: 120,
      coreDiscount: 0,
      discountedTotal: 0
    },
    promoCode: {
      id: 'gratis01',
      shares: 1,
      type: 'proportional',
      used: false,
      lastUser: {
        paymentStatus: 1,
        email: null,
        subscriptionId: 'U5KIemEqe0',
        id: 'EBWZldF7LxYNf296XmWt5Y77c7s2',
        franchiseId: 'MAO',
        name: 'Karina Moraes de Oliveira',
        cpf: '00943942292',
        phoneNumber: '+5592993499780',
        subscriptionDate: {
          seconds: 1561384214,
          nanoseconds: 319000000
        }
      },
      maxUses: 1000,
      value: 9340,
      timesUsed: 70,
      firstUsageDate: { seconds: 1530405017, nanoseconds: 273000000 },
      createdBy: {
        email: 'alt.gsj@gmail.com',
        id: 'GWZrvWmMuGOP4lObg4t0XRqglyJ3',
        phoneNumber: null
      },
      expired: false,
      lastUsageDate: { seconds: 1561384214, nanoseconds: 381000000 },
      reusable: true,
      creationDate: { seconds: 1529544125, nanoseconds: 98000000 },
      exclusiveTo: null
    },
    paymentMetadata: null,
    installments: 1,
    creationDate: new Date('2019-07-02T19:48:19.140Z'),
    lastUpdate: '2019-07-02T19:48:19.140Z',
    paymentDate: null
  },
  {
    id: 'Dq9KW_dgh',
    user: {
      paymentStatus: 1,
      email: null,
      subscriptionId: 'rJenM_pqJ4',
      id: 'RfUu86ObCBbFp7ychB6Ru8Z1O593',
      franchiseId: 'MAO',
      name: 'Joana Macedo Campos',
      cpf: '865.123.232-20',
      phoneNumber: '+5599988888888',
      subscriptionDate: {
        seconds: 1544374292,
        nanoseconds: 214000000
      }
    },
    paymentMethod: 'credit_card',
    plan: {
      value: 120,
      perCapita: 120,
      id: 'pg-1',
      discount: 0,
      name: 'Individual',
      count: 1
    },
    state: 1,
    calculations: {
      promoCodeDiscount: 0,
      rawTotal: 120,
      discount: 0,
      coreDiscount: 0,
      discountedTotal: 120
    },
    promoCode: null,
    paymentMetadata: {
      subscription: {
        customer: {
          email: null,
          id: 173540,
          name: 'Joana Macedo Campos',
          code: 'RfUu86ObCBbFp7ychB6Ru8Z1O593'
        },
        billing_cycles: null,
        payment_profile: {
          token: '9f0f1b40-a0a3-4932-84f2-d192af120539',
          holder_name: 'ASD ASD QWEQWE',
          id: 134922,
          created_at: '2019-06-30T00:20:16.000-03:00',
          card_number_first_six: '555555',
          payment_company: {
            id: 12,
            name: 'MasterCard',
            code: 'mastercard'
          },
          bank_account: null,
          registry_code: null,
          card_number_last_four: '5557',
          card_expiration: '2023-12-31T23:59:59.000-02:00',
          bank_branch: null
        },
        next_billing_at: '2020-06-30T00:00:00.000-03:00',
        created_at: '2019-06-30T00:20:45.969-03:00',
        plan: {
          id: 8413,
          name: 'ASMED Brasil - Anual',
          code: 'anual-plan'
        },
        billing_trigger_day: 0,
        current_period: {
          billing_at: '2019-06-30T00:00:00.000-03:00',
          cycle: 1,
          start_at: '2019-06-30T00:00:00.000-03:00',
          id: 770535,
          end_at: '2020-06-29T23:59:59.000-03:00',
          duration: 31622399
        },
        start_at: '2019-06-30T00:00:00.000-03:00',
        code: 'Dq9KW_dgh',
        end_at: null,
        cancel_at: null,
        invoice_split: false,
        id: 104163,
        billing_trigger_type: 'beginning_of_period',
        metadata: {},
        status: 'active',
        payment_method: {
          public_name: 'Cartão de crédito',
          type: 'PaymentMethod::CreditCard',
          id: 2896,
          name: 'Cartão de crédito',
          code: 'credit_card'
        },
        interval: 'months',
        installments: 1,
        updated_at: '2019-06-30T00:20:45.969-03:00',
        overdue_since: null,
        interval_count: 12,
        product_items: [
          {
            status: 'active',
            id: 147082,
            uses: 1,
            pricing_schema: {
              schema_type: 'per_unit',
              pricing_ranges: [],
              id: 105244,
              created_at: '2019-06-29T22:36:30.000-03:00',
              price: '120.0',
              short_format: 'R$ 120,00 / pessoas/ano',
              minimum_price: null
            },
            cycles: null,
            created_at: '2019-06-30T00:20:45.000-03:00',
            updated_at: '2019-06-30T00:20:45.000-03:00',
            discounts: [],
            quantity: 1,
            product: {
              id: 21249,
              name: 'Assinatura ASMED Brasil',
              code: 'anual-subscription'
            }
          }
        ]
      },
      bill: {
        id: 803113,
        created_at: '2019-06-30T00:20:46.000-03:00',
        payment_profile: {
          token: '9f0f1b40-a0a3-4932-84f2-d192af120539',
          holder_name: 'ASD ASD QWEQWE',
          id: 134922,
          created_at: '2019-06-30T00:20:16.000-03:00',
          card_number_first_six: '555555',
          payment_company: {
            id: 12,
            name: 'MasterCard',
            code: 'mastercard'
          },
          bank_account: null,
          registry_code: null,
          card_number_last_four: '5557',
          card_expiration: '2023-12-31T23:59:59.000-02:00',
          bank_branch: null
        },
        charges: [
          {
            id: 786032,
            paid_at: '2019-06-30T00:20:46.000-03:00',
            created_at: '2019-06-30T00:20:46.000-03:00',
            amount: '120.0',
            status: 'paid',
            payment_method: {
              public_name: 'Cartão de crédito',
              type: 'PaymentMethod::CreditCard',
              id: 2896,
              name: 'Cartão de crédito',
              code: 'credit_card'
            },
            due_at: '2019-06-30T23:59:59.000-03:00',
            installments: 1,
            updated_at: '2019-06-30T00:20:46.000-03:00',
            print_url: null,
            last_transaction: {
              fraud_detector_status: null,
              fraud_detector_score: null,
              id: 950538,
              gateway_authorization:
                '2B14E6EAEF98CAB9202EEC90DCBF2799',
              payment_profile: {
                token: '9f0f1b40-a0a3-4932-84f2-d192af120539',
                holder_name: 'ASD ASD QWEQWE',
                id: 134922,
                created_at: '2019-06-30T00:20:16.000-03:00',
                card_number_first_six: '555555',
                payment_company: {
                  id: 12,
                  name: 'MasterCard',
                  code: 'mastercard'
                },
                bank_account: null,
                registry_code: null,
                card_number_last_four: '5557',
                card_expiration: '2023-12-31T23:59:59.000-02:00',
                bank_branch: null
              },
              fraud_detector_id: null,
              created_at: '2019-06-30T00:20:46.000-03:00',
              amount: '120.0',
              status: 'success',
              gateway: { id: 1448, connector: 'fake' },
              gateway_response_code: null,
              installments: 1,
              gateway_message: 'Transacao aprovada',
              gateway_transaction_id:
                '8e681c8f-a17d-4515-81c0-ca1bcfbe1c3a',
              transaction_type: 'charge',
              gateway_response_fields: {
                nsu: '8843053D9B6889192040979C356A21E9'
              }
            },
            next_attempt: null,
            attempt_count: 1
          }
        ],
        amount: '120.0',
        status: 'paid',
        url:
          'https://sandbox-app.vindi.com.br/customer/bills/803113?token=5b2e8002-8a6d-4618-8231-850023a7f16b',
        billing_at: null,
        due_at: null,
        installments: 1,
        code: null
      }
    },
    installments: 1,
    creationDate: new Date('2019-06-30T03:19:55.180Z'),
    lastUpdate: '2019-06-30T03:19:55.180Z',
    paymentDate: null
  }
];
