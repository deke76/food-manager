import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { useState } from "react";
import Button from "../buttons/actions/Button";

export default function LocationCardNew(props) {
  const { onSave, newLocation, setNewLocation } = props;

  const [showForm, setShowForm] = useState(false);

  const classes = classNames("location-card", { new: !showForm });

  return (
    <div className={classes} onClick={() => setShowForm(true)}>
      {showForm && (
        <>
          <header>
            <h4 className="location-card__title">
              <input
                type="text"
                placeholder="name"
                value={newLocation.name}
                onChange={(event) =>
                  setNewLocation((prev) => ({
                    ...prev,
                    name: event.target.value,
                  }))
                }
              />
            </h4>
          </header>
          <article>
            <div>
              <input
                type="text"
                placeholder="city"
                value={newLocation.city}
                onChange={(event) =>
                  setNewLocation((prev) => ({
                    ...prev,
                    city: event.target.value,
                  }))
                }
              />
              {/* <input
                type="text"
                placeholder="province"
                value={province}
                onChange={(event) => setProvince(event.target.value)}
              /> */}
            </div>
            <div>
              <input
                type="text"
                placeholder="country"
                value={newLocation.country}
                onChange={(event) =>
                  setNewLocation((prev) => ({
                    ...prev,
                    country: event.target.value,
                  }))
                }
              />
            </div>
            <Button
              icon="save"
              onClick={(event) => {
                event.stopPropagation();
                setShowForm(false);
                onSave();
              }}
            />
          </article>
        </>
      )}

      {!showForm && (
        <>
          <FontAwesomeIcon icon={faPlusCircle} />
          <div className="location-card__details">add a new location</div>
        </>
      )}
    </div>
  );
}
