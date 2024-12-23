import { Button } from "antd"

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>, React.PropsWithChildren {
    color: 'red' | 'yellow' | 'green ' | 'black' | 'white'
  }


export const But: React.FC<ButtonProps> = ({color, children, ...rest}) => {
  return (
    <Button style={{
      fontSize: "15px",
      color: color , 
      backgroundColor: "#041931",
      border: "1px solid " + color
    }} 
    {...rest}>{children}</Button>
  )
}
