import React from "react";
import {
    AppBar,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    makeStyles,
    Toolbar,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { CartItem } from "./CartItem";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    dialogWrapper: {
        width: "75%",
    },
    dialogAction: {
        justifyContent: "flex-start",
    },
    leftDialogActions: {
        justifyContent: "center",
    },
    content: {
        alignItems: "center",
        verticalAlign: "middle",
        textAlign: "center",
    },
}));

const Cart = ({
    cartList,
    isCartOpen,
    closeCart,
    handleIncrement,
    openCheckout,
    handleRemove,
}) => {
    const classes = useStyles();

    return (
        <Dialog open={isCartOpen} classes={classes.dialogWrapper} fullScreen>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Cart
                    </Typography>
                </Toolbar>
            </AppBar>
            <DialogTitle id="form-dialog-title">Product From</DialogTitle>
            <DialogContent className={classes.content}>
                {cartList.length === 0 && <p>No items in cart.</p>}
                {cartList.map((item) => (
                    <CartItem
                        key={item["productid"]}
                        item={item}
                        handleIncrement={handleIncrement}
                        handleRemove={handleRemove}
                    />
                ))}
            </DialogContent>
            <DialogActions classes={{ root: classes.leftDialogActions }}>
                <Button variant="outlined" color="default" onClick={closeCart}>
                    Return to Shop
                </Button>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => {
                        cartList.length !== 0 && openCheckout() && closeCart();
                    }}
                    disabled={cartList.length === 0}
                >
                    Checkout
                </Button>
            </DialogActions>
        </Dialog>
    );
};
export { Cart };
