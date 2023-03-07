import { v4 as uuid } from 'uuid'

export const mapMainMenuItems = (menuItems) => {
  console.log('mapMenu: ', menuItems)
  return menuItems.map((data) => ({
    id: uuid(),
    url: data.menuItem?.url,
    page: data.menuItem?.page.uri,
    label: data.menuItem.label || null,
    subMenuItems: (data.items || []).map(
      (subMenuItem) => ({
        id: uuid(),
        link: subMenuItem.link?.uri,
        label: subMenuItem.label,
      })
    ),
  }))
}
