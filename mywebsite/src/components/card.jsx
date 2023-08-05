import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { ThemeProvider } from "@material-tailwind/react";


const Tarjeta = () => {
    return (
        <ThemeProvider>
            <div className="">
                <Card className="mt-6 w-96 ml-8 bg-white bg-opacity-10">
                    <a href="#">
                    <CardBody className="">
                        <Typography variant="h5" className="mb-2 cardtitle"  >
                            UI/UX Review Check
                        </Typography>
                        <Typography>
                            The place is close to Barceloneta Beach and bus stop just 2 min by
                            walk and near to &quot;Naviglio&quot; where you can enjoy the main
                            night life in Barcelona.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button className="">Read More</Button>
                    </CardFooter>
                    </a>
                </Card>
            </div>
            
        </ThemeProvider>

    )
}

export default Tarjeta;
