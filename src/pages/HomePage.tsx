import Header from "../components/Header";
import Heading from "../components/Heading";
import { DashboardData } from "../config/data";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../app/store";
import { toggleCspm } from "../features/cspm/cspmSlice";
import { toggleCwpp } from "../features/cwpp/cwppSlice";
import { toggleimage } from "../features/imagea/imageSlice";
import { toggleticket } from "../features/ticket/ticketSlice";
import CardItems from "../components/CardItems";
import AddCard from "../components/AddCard";

const HomePage = () => {
  const dispatch = useDispatch();

  const cspm = useSelector((state: RootState) => state.cspm.cspm);
  const cwpp = useSelector((state: RootState) => state.cwpp.cwpp);
  const image = useSelector((state: RootState) => state.image.image);
  const ticket = useSelector((state: RootState) => state.ticket.ticket);

  const handleCheckboxChange = (id: string, type: string) => {
    switch (type) {
      case "cspm":
        dispatch(toggleCspm(id));
        break;
      case "cwpp":
        dispatch(toggleCwpp(id));
        break;
      case "image":
        dispatch(toggleimage(id));
        break;
      case "ticket":
        dispatch(toggleticket(id));
        break;
      default:
        break;
    }
  };

  const handleClose = (id: string, type: string) => {
    handleCheckboxChange(id, type);
  };

  return (
    <div>
      <Header />
      <Heading />
      <div className="py-4 pl-2">
        <div>
          {DashboardData.CSPM.title} {DashboardData.CSPM.subtitle}
        </div>
        <div className="grid md:grid-cols-3 gap-2">
          {cspm
            .filter((item) => item.isOpen)
            .map((item) => (
              <CardItems
                key={item.id}
                data={item}
                onClose={() => handleClose(item.id, "cspm")}
              />
            ))}
          <AddCard />
        </div>
      </div>
      <div className="py-4 pl-2">
        <div>
          {DashboardData.CWPP.title} {DashboardData.CWPP.subtitle}
        </div>
        <div className="grid md:grid-cols-3 gap-2">
          {cwpp
            .filter((item) => item.isOpen)
            .map((item) => (
              <CardItems
                key={item.id}
                data={item}
                onClose={() => handleClose(item.id, "cwpp")}
              />
            ))}
          <AddCard />
        </div>
      </div>
      <div className="py-4 pl-2">
        <div>
          {DashboardData.Image.title} {DashboardData.Image.subtitle}
        </div>
        <div className="grid md:grid-cols-3 gap-2">
          {image
            .filter((item) => item.isOpen)
            .map((item) => (
              <CardItems
                key={item.id}
                data={item}
                onClose={() => handleClose(item.id, "image")}
              />
            ))}
          <AddCard />
        </div>
      </div>
      <div className="py-4 pl-2">
        <div>
          {DashboardData.Ticket.title} {DashboardData.Ticket.subtitle}
        </div>
        <div className="grid md:grid-cols-3 gap-2">
          {ticket
            .filter((item) => item.isOpen)
            .map((item) => (
              <CardItems
                key={item.id}
                data={item}
                onClose={() => handleClose(item.id, "ticket")}
              />
            ))}
          <AddCard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
