export const load = ({ route }) => {
    // get route ID (e.g. "/(portfolio)/...")
    const routeId = route.id || '';

    // extract "group" name
    // split('/') turns "/(portfolio)/..." into ["", "(portfolio)", "..."]
    // take item at index 1
    const layoutGroup = routeId.split('/')[1]; 

    return {
        // "(portfolio)" or "(concepts)" or whatever
        layoutGroup 
    };
};