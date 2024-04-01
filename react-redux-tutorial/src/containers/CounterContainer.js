import { connect, useDispatch, useSelector } from "react-redux";
import Counter from "../components/Counter"
import { increase, decrease } from "../modules/counter";
import { bindActionCreators } from "redux";
import { useCallback } from "react";

const CounterContainer = () => {
    const number = useSelector(state => state.counter.number);
    const dispatch = useDispatch();
    const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
    return (
        <Counter
            number={number}
            onIncrease = {onIncrease}
            onDecrease = {onDecrease}
        />
    );
}

/*const mapStateToProps = state => ({
    number: state.counter.number
});

const mapDispatchToProps = dispatch => ({
    increase: () => {
        dispatch(increase());
    },
    decrease: () => {
        dispatch(decrease());
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CounterContainer);*/      // 1번 방법

/*export default connect(
    state => ({
        number: state.counter.number
    }),
    dispatch => ({
        increase: () => dispatch(increase()),
        decrease: () => dispatch(decrease()),
    })
)(CounterContainer);*/      // 2번 방법

/*export default connect(
    state => ({
        number: state.counter.number,
    }),
    dispatch => bindActionCreators(
        {
            increase,
            decrease
        },
        dispatch,
    )
)(CounterContainer);*/      // 3번 방법

export default CounterContainer;        // 4번 방법