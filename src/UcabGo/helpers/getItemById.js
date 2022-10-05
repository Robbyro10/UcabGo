

export const getMenuItem = (menu, id) => {
    return menu.find( item => item.itemId === id)
}