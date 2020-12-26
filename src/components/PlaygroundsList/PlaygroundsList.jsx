import s from "./PlaygroundsList.module.css"
import PlaygroundCardContainer from "./PlaygroundCard/PlaygroundCardContainer";

const PlaygroundsList = () => {

      return (
        <div>
            <input type="text"/>
            <button>поиск</button>

            <div className={s.row}>
                <PlaygroundCardContainer />
            </div>

        </div>
    )

}

export default PlaygroundsList
