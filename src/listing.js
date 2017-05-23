/**
 * Listing Class
 * @class
 * @public
 */
export class Listing {

  /**
   * This function returns listings based on a geographic region.
   * @param {string} name any string.
   */
  constructor(name='') {
    this.name = name;
  }

  /**
   * This function returns listings based on a geographic region.
   * @param {function} callback any function.
   * @returns {object} listing data.
   */
  fetchListingData(callback) {
    fetch('http://svc.moxiworks.com/service/v1/listing/search?searchType=criteria&context=map&drive_departure=0&drive_time=08%3A15&drive_duration=30&drive_avoid_ferry=1&_location_search_field=bellevue%20wa&status=active&sold_days=180&ls_conversion=sqft&ptype=1%2C2%2C9%2C4%2C3%2C5%2C7&center_lat=47.610377&center_lon=-122.2006786&geotype=PopulatedPlace&startidx=0&searchOrGeocode=geocode&lockMapEvent=false&user_lat=47.610377&user_lon=-122.2006786&user_uuid=cd3f6fdc-046c-4196-b9c0-796901a6544f&company_uuid=1234567&pgsize=100&panmap=true&buffer_miles=0.25&sort_by=1&updateResultsMapMove=1&radius=false&geospatial=true&draw=false&sort_by_card=1&ss_email_freq=1&ss_send_zero_result=1&ss_sort_order=0&from_app=search:www.windermere.com&cluster_allow=1&cluster_threshold=100', {
    	method: 'GET',
    	mode: 'cors',
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      if (callback) {
        callback(data);
      }
    });
  }

  /**
   * @example
   * import { Listing } from 'moxiworks-js';
   * const listing = new Listing('listings');
   * const listings = listing.fetchListingData((res) => {
   *   return res;
   * });
   */
}
