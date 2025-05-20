import {
    GraphQLFloat,
    GraphQLInt,
    GraphQLList,
    GraphQLObjectType,
} from 'graphql/type';
import { CustomerType } from '../type/customer.type';
import { Database } from '../../database/database';
import customer from '../../routes/customer';

export const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        customers: {
            type: new GraphQLList(CustomerType),
            resolve: () => Database.customers,
        },
        customer: {
            type: CustomerType,
            args: {
                id: {
                    type: GraphQLInt,
                },
            },
            resolve: (parent: any, args: any) => {
                return Database.customers.find(customer => {
                    return customer.id === args.id;
                });
            },
        },
        customerTotal: {
            type: new GraphQLObjectType({
                name: 'CustomerTotal',
                fields: () => ({
                    total_price: { type: GraphQLFloat },
                }),
            }),
            args: {
                id: {
                    type: GraphQLInt,
                },
            },
            resolve: (parent: any, args: any) => {
                const customer = Database.customers.find(customer => {
                    return customer.id === args.id;
                });
                if (!customer) {
                    return 0;
                }
                const orders = Database.orders.filter(order => {
                    return order.customer_id === customer.id;
                });
                let total = 0;
                for (let order of orders) {
                    const product = Database.products.find(
                        p => p.id === order.product_id,
                    );
                    if (!product) continue;
                    let price = product.price;
                    if (product.sell_off && product.percent) {
                        price = price * (1 - product.percent / 100);
                    }
                    total += order.quantity * price;
                }
                return total;
            },
        },
    }),
});
