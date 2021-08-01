/** @jsx jsx */
import { jsx, useThemeUI, Flex } from "theme-ui"
import { SocialIcon } from "react-social-icons"

export default function SocialIcons({ inverted, ...props }) {
  const { theme } = useThemeUI()
  const { background, text } = theme.colors
  return (
    <Flex {...props}>
      <SocialIcon
        target="_blank"
        bgColor="#00000000"
        fgColor={inverted ? background : text}
        url="https://instagram.com/maulina.cl"
      />
      <SocialIcon
        target="_blank"
        bgColor="#00000000"
        fgColor={inverted ? background : text}
        url="https://facebook.com/maulina.cl"
      />
    </Flex>
  )
}
