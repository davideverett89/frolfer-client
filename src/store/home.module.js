const home = {
    state: () => ({
        scorecards: []
    }),
    getters: {
        scorecards(state) {
            return state.scorecards;
        }
    }
}

export default home