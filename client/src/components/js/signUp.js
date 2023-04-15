function SignUp() {
    return(
    <>
    <main>
        <h2>Some questions before we begin...</h2>
        <section>
            <form>
                <div class="form-item">
                    <label for="commute">How long is your commute to from home to school?</label>
                    <input type="number" name="commute" id="commute"></input>
                </div>

                <div class="form-item">
                    <label for="sleep">How many hours do you need to sleep everynight?</label>
                    <input type="number" name="sleep" id="sleep"></input>
                </div>

                <div class="form-item">
                    <label for="study">How many hours do you aim to study per weeek?</label>
                    <input type="number" name="study" id="study"></input>
                </div>

                <div class="form-item">
                    <label for="wake-up">How much time do you need to wake up in the morning?</label>
                    <input type="number" name="wake-up" id="wake-up"></input>
                </div>

                <div class="form-item">
                    <label for="wind-down">How much time do you need to wind down at night?</label>
                    <input type="number" name="wind-down" id="wind-down"></input>
                </div>

                <div class="form-item">
                    <button id="submit">SUBMIT</button>
                </div>
            </form>

        </section>
    </main>
    </>
    );
}