import { Component } from "react/cjs/react.production.min";
import ErrorMessage from "../errorMessage/ErrorMessage";
// не ловит ошибку в обработчиках событий,сетевых запросах,самому предохранителю,и на серверах
class ErrorBoundary extends Component {
    state = {
        error: false
    }

    componentDidCatch(error,errorInfo){
        console.log(error,errorInfo);
        this.setState({
            error: true
        })
    }

    render() {
        if (this.state.error){
            return <ErrorMessage/>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;