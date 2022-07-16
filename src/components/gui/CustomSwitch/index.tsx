import { useLayout } from "../../../hooks/useLayout";
import { Switch, SwitchThumb } from "./styles";

interface Props {
  toggle: 'open' | 'close'
}

export const CustomSwitch = ({toggle}: Props) => {
  const {handleToggleTheme} = useLayout()
  return (
    <Switch
      toggle={toggle}
      id="theme-switcher"
      onCheckedChange={handleToggleTheme}
    >
      <SwitchThumb toggle={toggle} />
    </Switch>
  )
}