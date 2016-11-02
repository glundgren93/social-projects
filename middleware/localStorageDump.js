export default store => next => action => {
    const state = store.getState();
    localStorage.setItem('SOCIAL_PROJECTS', JSON.stringify(state));
    next(action);
}
