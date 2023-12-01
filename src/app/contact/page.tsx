
/**
 *  Contact Page
 *  Created by Muhammed Elşami on 01.12.2023
 */ 

export default function ContactPage() {
    return (
        <div>
            <h1>Contact Us</h1>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Email:
                    <input type="text" name="email" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}