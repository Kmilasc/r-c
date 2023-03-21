import { PropsWithChildren } from "react";
import { Header } from "./Header";
import { Baseboard } from "./Baseboard";

function Layout({ children }: PropsWithChildren<unknown>) {
    return (
        <div className="bg-white">
            <Header />
            {children}
            <Baseboard />
        </div>
    );
}

export default Layout;
