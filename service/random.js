function Record() {
  this.base_plan_name = ["A", "B", "C"];
  this.proposal_no = ["A", "B", "C"];
  this.proposal_sign_date = ["A", "B", "C"];
  this.policy_issue_date = ["A", "B", "C"];
  this.commencement_date = ["A", "B", "C"];
  this.sum_assured = ["A", "B", "C"];
  this.maturity_date = ["A", "B", "C"];
  this.life_assured_name = ["A", "B", "C"];
  this.entry_age = ["A", "B", "C"];
  this.policy_no = ["A", "B", "C"];
  this.entry_branch = ["A", "B", "C"];
  this.sum_assured = ["A", "B", "C"];
  this.life_assured_address = ["A", "B", "C"];
  this.beneficiary = ["A", "B", "C"];
  this.term_of_policy = ["A", "B", "C"];
  this.premium_paying_term = ["A", "B", "C"];
  this.interest_rate = ["A", "B", "C"];
  this.maturity_benefit = ["A", "B", "C"];
  this.death_benefit = ["A", "B", "C"];
  this.accident_death_benefit = ["A", "B", "C"];
  this.modal_premium = ["A", "B", "C"];
  this.mode_of_payment = ["A", "B", "C"];
  this.due_of_payment = ["A", "B", "C"];
  this.no_due_1st_paid_payment = ["A", "B", "C"];
  this.rider_name = ["A", "B", "C"];
  this.product_code_of_rider = ["A", "B", "C"];
  this.product_ver_of_rider = ["A", "B", "C"];
  this.sum_assured_rider = ["A", "B", "C"];
  this.modal_premium_rider = ["A", "B", "C"];
  this.remarks1 = ["A", "B", "C"];
  this.premium_paying_term_rider = ["A", "B", "C"];
  this.remarks2 = ["A", "B", "C"];
  this.extra_premium_of_rider = ["A", "B", "C"];
  this.total_modal_premium_riders = ["A", "B", "C"];
  this.mode_of_payment_rider = ["A", "B", "C"];
  this.endorsement_code = ["A", "B", "C"];
  this.agent_type = ["A", "B", "C"];
  this.agent_name = ["A", "B", "C"];
  this.license_no = ["A", "B", "C"];
  this.agent_email_address = ["A", "B", "C"];
  this.product_code = ["A", "B", "C"];
  this.product_version = ["A", "B", "C"];
  this.extra_premiumbase_plan = ["A", "B", "C"];
  this.extra_premium_riders = ["A", "B", "C"];
  this.a_auth_person_name = ["A", "B", "C"];
  this.a_posi_of_auth_person_name = ["A", "B", "C"];
  this.b_auth_person_name = ["A", "B", "C"];
  this.b_posi_of_auth_person_name = ["A", "B", "C"];
  this.c_auth_person_name = ["A", "B", "C"];
  this.c_posi_of_auth_person_name = ["A", "B", "C"];
  this.d_auth_person_name = ["A", "B", "C"];
  this.d_posi_of_auth_person_name = ["A", "B", "C"];
  this.alteration_type = ["A", "B", "C"];
  this.religion = ["A", "B", "C"];
  this.term_of_policy_factor = ["A", "B", "C"];
  this.type_of_plan = ["A", "B", "C"];
}

function Item() {
  this.elixirid = ["2"];
  this.policynbr = ["p11", "p22"];
  this.eventid = ["e11", "e22"];
  this.templateid = ["t11", "t22"];
  this.templatereferencedate = [""];
}

function elixirId() {
  elixirId.value = elixirId.value || 0;
  elixirId.value ++;
  return elixirId.value;
}

// Random class
function Random() {}

// Random method
Random.prototype.randomValue = function(prototype, input) {
  var keys = Object.keys(prototype);
  keys.forEach(function(key){
    var values = prototype[key];
    var length = values.length;
    var random = Math.floor(Math.random() * length);
    var randomValue = values[random];

    if(input.hasOwnProperty(key)) {
      input[key] = randomValue;
    }
  });;
};

// Random method
Random.prototype.randomItem = function(item) {
  var prototype = new Item();
  this.randomValue(prototype, item);

  item.elixirid = elixirId();
};

// Random method
Random.prototype.randomRecord = function(input) {
  var prototype = new Record();
  this.randomValue(prototype, input);
};

exports.Random = Random;














