const state = {
    funds: Number(10000),
    stocks: []
};

const mutations = {
    'BUY_STOCK'(state, {stockId, quantity, stockPrice}) {
        const record = state.stocks.find(element => element.id == stockId);
        if(record) {
            record.quantity += Number(quantity);
        } else {
            state.stocks.push({
                id: stockId,
                quantity: Number(quantity)
            });
        }
        state.funds -= Number(stockPrice) * Number(quantity);
    },
    'SELL_STOCK' (state, {stockId, quantity, stockPrice}) {
         const record = state.stocks.find(element => element.id == stockId);
         if (record.quantity > quantity) {
             record.quantity -= Number(quantity);
         } else {
             state.stocks.splice(state.stocks.indexOf(record), 1);
         }
         state.funds += Number(stockPrice) * Number(quantity);
    },
    'SET_PORTFOLIO' (state, portfolio) {
        state.funds = portfolio.funds;
        state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
    }
};

const actions = {
    sellStock({ commit}, order) {
        commit('SELL_STOCK', order);
    }
};

const getters = {
    stockPortfolio (state, getters) {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element => element.id == stock.id);
            return {
                id: stock.id,
                quantity: Number(stock.quantity),
                name: record.name,
                price: Number(record.price)
            }
        });
    },
    funds (state) {
        return Number(state.funds);
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}