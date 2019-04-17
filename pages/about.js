import Link from 'next/link';
import Header from '../components/Header';
const about = () => (
    <div>
    <Header/>
        <Link href="about">
            <div>
                <h1>About Next</h1>
                <p>Copyright By Manhdeptrai</p>
            </div>
        </Link>
    </div>
)

export default about;