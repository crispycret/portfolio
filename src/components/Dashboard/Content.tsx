import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import useIsMobile from "../../helpers/hooks/useIsMobile";


type ChildrenProps = {
    props: any
    children: JSX.Element,
};
export const Content = ({ props, children }: ChildrenProps) => {

    const [isMobile, isNotMobile] = useIsMobile();

 
    /**
     * Modify the content page to account for the change in size of the sidebar when toggled.
     */
    const sidebarToggledClassName = 'sidebar-open'
    const [sidebarClass, setSidebarClass] = useState('')
    const handleSidebar = () => {
        if (props.sidebarToggled) {
            if (!isMobile) {
                setSidebarClass(sidebarToggledClassName)
            } else {
                setSidebarClass('')
            }
        } else {
            setSidebarClass('')
        }
    }

    useEffect(() => {
        // Watch for toggling of the sidebar
        handleSidebar()
    }, [props.sidebarToggled])

    return (
        <Container className={`dashboard-content ${sidebarClass} ${isMobile ? 'mobile' : ''}`}>
            {children}
        </Container>
    )

}



export default Content;