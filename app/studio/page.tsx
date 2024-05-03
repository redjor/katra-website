import Breadcrumbs from "@/app/components/shared/Breadcrumbs";
import Container from "@/app/components/layout/Container";

export default function Studio() {
    return (
        <div className="pt-32">
            <Container>
                <Breadcrumbs icon="studio-icon-white"/>
            </Container>
        </div>
    )
}