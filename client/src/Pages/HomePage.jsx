
import OrderForm from '../Component/Forms/OrderForm'
import Read from '../Component/Forms/Read'
import Header from '../Component/Header/Header'

const HomePage = () => {
  return (
    <Header>
        <OrderForm/>
        <Read/>
    </Header>
  )
}

export default HomePage