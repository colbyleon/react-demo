import Home from "../pages/home";
import Buttons from "../pages/ui/buttons";
import Modals from '../pages/ui/Modals'

const routerData = {
  contentLayout: [
    {
      path: "/home",
      component: Home
    }, {
      path: "/ui/buttons",
      component: Buttons
    },{
      path: "/ui/modals",
      component: Modals
    }
  ]
}

const contentLayout = routerData.contentLayout;

export {contentLayout}
export default routerData;