import { IComment, ITreeDetails, ITreeInfo } from "@/types";

export const SAMPLE_TREES = [
  {
    "id": "1",
    "lat": 40.181389,
    "lon": 44.514444,
    "osm_id": 12345,
    "species": "An old birch",
    "height": 18.5,
    "circumference": 1.2,
    "diameter": 7,
    "notes": null,
    "state": "healthy",
    "updated_at": 1714505048,
    "thumbnail_id": null,
  },
  {
    "id": "128210594892484600",
    "lat": 40.22174748453427,
    "lon": 44.55499326643146,
    "osm_id": 12345,
    "species": "qwe aasd",
    "height": 21.5,
    "circumference": 1.2,
    "diameter": 5,
    "notes": "A big tree",
    "state": "healthy",
    "thumbnail_id": null,
    "updated_at": 1714505048,
  },
  {
    "id": "128242881436717060",
    "lat": 40.16234575628614,
    "lon": 44.62291898117552,
    "osm_id": 12345,
    "species": "test tree",
    "height": 21.5,
    "circumference": 1.2,
    "diameter": 5,
    "notes": "A big tree",
    "state": "healthy",
    "thumbnail_id": null,
    "updated_at": 1714505048,
  },
  {
    "id": "128245117764112380",
    "lat": 40.18018485291529,
    "lon": 44.55350590139917,
    "osm_id": 12345,
    "species": "another tree",
    "height": 21.5,
    "circumference": 1.2,
    "diameter": 5,
    "notes": "A big tree",
    "state": "healthy",
    "thumbnail_id": null,
    "updated_at": 1714505048,
  },
  {
    "id": "128245920759418880",
    "lat": 40.20026462081529,
    "lon": 44.5688510139514,
    "osm_id": 12345,
    "species": "Some tree",
    "height": 21.5,
    "circumference": 1.2,
    "diameter": 5,
    "notes": "A big tree",
    "state": "healthy",
    "thumbnail_id": null,
    "updated_at": 1714505048,
  },
  {
    "id": "128246278395138050",
    "lat": 40.20060879357814,
    "lon": 44.57038489822188,
    "osm_id": 12345,
    "species": "a tree",
    "height": 21.5,
    "circumference": 1.2,
    "diameter": 5,
    "notes": "A big tree",
    "state": "healthy",
    "thumbnail_id": null,
    "updated_at": 1714505048,
  },
  {
    "id": "128246614136590340",
    "lat": 40.20077678203027,
    "lon": 44.56939316739498,
    "osm_id": 12345,
    "species": "ijuhuihg",
    "height": 21.5,
    "circumference": 1.2,
    "diameter": 5,
    "notes": "A big tree",
    "state": "healthy",
    "thumbnail_id": null,
    "updated_at": 1714505048,
  },
  {
    "id": "128258603206447100",
    "lat": 40.21401378262961,
    "lon": 44.51072101214662,
    "osm_id": 12345,
    "species": "test tree",
    "height": 21.5,
    "circumference": 1.2,
    "diameter": 5,
    "notes": "A big tree",
    "state": "healthy",
    "thumbnail_id": null,
    "updated_at": 1714505048,
  },
  {
    "id": "134025978690277380",
    "lat": 40.18484395454571,
    "lon": 44.53205108642578,
    "osm_id": 12345,
    "species": "test 123",
    "height": 21.5,
    "circumference": 1.2,
    "diameter": 5,
    "notes": "A big tree",
    "state": "healthy",
    "thumbnail_id": null,
    "updated_at": 1714505048,
  },
  {
    "id": "134371833565810690",
    "lat": 40.17440928235685,
    "lon": 44.537780817706825,
    "osm_id": 12345,
    "species": "test",
    "height": 21.5,
    "circumference": 1.2,
    "diameter": 5,
    "notes": "A big tree",
    "state": "healthy",
    "thumbnail_id": null,
    "updated_at": 1714505048,
  },
  {
    "id": "134372280418570240",
    "lat": 40.16739627047165,
    "lon": 44.55907357476179,
    "osm_id": 12345,
    "species": "test",
    "height": 21.5,
    "circumference": 1.2,
    "diameter": 5,
    "notes": "A big tree",
    "state": "healthy",
    "thumbnail_id": null,
    "updated_at": 1714505048,
  },
  {
    "id": "134792003752955900",
    "lat": 40.1687178633028,
    "lon": 44.50999259948731,
    "osm_id": 12345,
    "species": "test",
    "height": 21.5,
    "circumference": 1.2,
    "diameter": 5,
    "notes": "A big tree",
    "state": "healthy",
    "thumbnail_id": null,
    "updated_at": 1714505048,
  },
  {
    "id": "134792907214426110",
    "lat": 40.17164148250818,
    "lon": 44.53134298324585,
    "osm_id": 12345,
    "species": "test",
    "height": 21.5,
    "circumference": 1.2,
    "diameter": 5,
    "notes": "A big tree",
    "state": "healthy",
    "thumbnail_id": null,
    "updated_at": 1714505048,
  },
  {
    "id": "134793003121381380",
    "lat": 40.15545808595177,
    "lon": 44.577190755610864,
    "osm_id": 12345,
    "species": "test",
    "height": 21.5,
    "circumference": 1.2,
    "diameter": 5,
    "notes": "A big tree",
    "state": "healthy",
    "thumbnail_id": null,
    "updated_at": 1714505048,
  }
] as ITreeInfo[];

export const SAMPLE_COMMENTS = [
  {
    id: "2",
    added_at: 1713464517,
    message: "This tree is awesome!",
  },
  {
    id: "1",
    added_at: 1570329700,
    message: "I like it",
  },
] as IComment[];

export const SAMPLE_TREE = {
  "id": "134793003121381380",
  "lat": 40.181389,
  "lon": 44.514444,
  "osm_id": 12345,
  "species": "Sycamore",
  "notes": "The biggest Sycamore in region.",
  "height": 18.5,
  "circumference": 1.2,
  "diameter": 7,
} as ITreeDetails;
