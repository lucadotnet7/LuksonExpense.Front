import { Typography } from "@mui/material";
import { Button, CardActionArea, CardActions, CardContent } from "@mui/material";
import { Card } from "@mui/material";
import styles from "./styles.module.scss";
import { formatPrice } from "../../../../utils/format";

export interface IInformationCardProps {
    title: string;
    description: string;
    buttonText: string;
    price: number;
}

export default function InformationCard({ title, description, buttonText, price }: IInformationCardProps) {
    return (
        <Card className={styles.card}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2">
                        {description}
                    </Typography>
                    <Typography variant="h5">
                        {formatPrice(price)}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ justifyContent: 'flex-end' }}>
                <Button size="small" color="primary">
                    {buttonText}
                </Button>
            </CardActions>
        </Card>
    )
}